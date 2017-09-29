package org.optimus.encfsfilemanager.server.services;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.exec.CommandLine;
import org.apache.commons.exec.DefaultExecutor;
import org.apache.commons.exec.ExecuteException;
import org.apache.commons.exec.ExecuteStreamHandler;
import org.apache.commons.exec.PumpStreamHandler;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.ArrayUtils;
import org.optimus.encfsfilemanager.server.dto.FileDto;
import org.optimus.encfsfilemanager.server.dto.FileDto.STATE;
import org.optimus.encfsfilemanager.server.dto.FolderDto;
import org.optimus.encfsfilemanager.server.exception.ServiceException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FileService extends AbstractService {

	private final static Logger LOGGER = LoggerFactory.getLogger(FileService.class);

	@Autowired
	private Environment env;

	public FolderDto getFolderContent(String folder, boolean withFile) throws ServiceException {
		Path globalRootPath = Paths.get(localRootFolder).resolve(localGlobalFolder);
		Path localDecodedPath = Paths.get(localRootFolder).resolve(localDecodedFolder);
		Path remoteRootPath = Paths.get(localRootFolder).resolve(remoteDecodedFolder);

		Path folderToScan = getFileInGlobalFolder(folder);

		if (!Files.exists(folderToScan)) {
			throw new ServiceException("Folder {} doesn't exist", folderToScan);
		}

		if (!Files.isDirectory(folderToScan)) {
			throw new ServiceException("{} isn't a folder", folderToScan);
		}

		LOGGER.debug("Folder to scan {]", folderToScan);

		FolderDto folderDto = new FolderDto();
		folderDto.setPath(folder);
		folderDto.setName(getFolderLabel(folderToScan.getFileName().toString()));
		try (DirectoryStream<Path> stream = Files.newDirectoryStream(folderToScan)) {
			stream.forEach((entry) -> getFolderMetadata(withFile, globalRootPath, localDecodedPath, remoteRootPath, folderDto, entry));
		} catch (IOException e) {
			LOGGER.error(e.getMessage(), e);
		}

		return folderDto;
	}

	private FolderDto getFolderMetadata(boolean withFile, Path globalRootPath, Path localDecodedPath, Path remoteRootPath, FolderDto folderDto, Path entry) {
		boolean isLocal = Files.exists(localDecodedPath.resolve(globalRootPath.relativize(entry)));
		boolean isRemote = Files.exists(remoteRootPath.resolve(globalRootPath.relativize(entry)));
		STATE state = STATE.REMOTE;
		if (isLocal) {
			state = STATE.LOCAL;
			if (isRemote) {
				state = STATE.BOTH;
			}
		}

		try {
			if (Files.isDirectory(entry)) {
				FolderDto subFolder = new FolderDto();
				subFolder.setName(getFolderLabel(entry.getFileName().toString()));
				subFolder.setSize(Files.size(entry));
				subFolder.setState(state);
				subFolder.setPath(globalRootPath.relativize(entry).toString());
				subFolder.setDateUpdate(new Date(Files.getLastModifiedTime(entry).toMillis()));
				folderDto.getFolders().add(subFolder);
				folderDto.setSize(folderDto.getSize() + subFolder.getSize());

			} else if (withFile) {
				FileDto fileDto = new FileDto();
				fileDto.setName(entry.getFileName().toString());
				fileDto.setSize(Files.size(entry));
				fileDto.setState(state);
				fileDto.setPath(globalRootPath.relativize(entry).toString());
				fileDto.setDateUpdate(new Date(Files.getLastModifiedTime(entry).toMillis()));
				folderDto.getFiles().add(fileDto);
				folderDto.setSize(folderDto.getSize() + fileDto.getSize());
			}
		} catch (IOException e) {
			throw new ServiceException("Error to process folder {}", e, entry);
		}

		folderDto.getFolders().stream().sorted((o1, o2) -> {
			return o1.getName().toLowerCase().compareTo(o2.getName().toLowerCase());
		});

		folderDto.getFiles().stream().sorted((o1, o2) -> {
			return o1.getName().toLowerCase().compareTo(o2.getName().toLowerCase());
		});

		return folderDto;
	}

	private String getFolderLabel(String folder) {
		return env.getProperty("folder.label." + folder, folder);
	}

	public Path getFileInGlobalFolder(String path) throws ServiceException {
		Path globalRootFolder = Paths.get(localRootFolder).resolve(localGlobalFolder);

		Path file = globalRootFolder.resolve(path);
		if (!Files.exists(file)) {
			throw new ServiceException("File {} does't exist", file);
		}
		if (!Files.isReadable(file)) {
			throw new ServiceException("File {} isn't readable", file);
		}

		return file;
	}

	public void delete(String path) throws ServiceException {
		Path localFile = Paths.get(localRootFolder).resolve(localDecodedFolder).resolve(path);
		Path remotePath = Paths.get(localRootFolder).resolve(remoteDecodedFolder);
		Path remoteFile = remotePath.resolve(path);

		if (Files.exists(localFile)) {
			LOGGER.debug("File {} exist in local storage {}", path, localFile);
			try {
				Files.delete(localFile);
			} catch (IOException e) {
				throw new ServiceException("Unable to delete {}", localFile);
			}
		}

		if (Files.exists(remoteFile)) {
			LOGGER.debug("File {} exist in remote storage {}", path, remoteFile);
			try {
				Files.delete(remoteFile);
			} catch (IOException e) {
				throw new ServiceException("Unable to delete {}", localFile);
			}
		}
	}

	public void saveFiles(String path, MultipartFile[] files) throws ServiceException {
		if (ArrayUtils.isNotEmpty(files)) {
			Arrays.asList(files).forEach((file) -> {
				Path destPath = null;
				try {
					destPath = getFileInGlobalFolder(path).resolve(file.getOriginalFilename());
				} catch (ServiceException e) {
					throw new ServiceException("Unable to retrieve path {}", path);
				}
				try {
					LOGGER.debug("Save file to local path {}", destPath);
					Files.copy(file.getInputStream(), destPath, StandardCopyOption.REPLACE_EXISTING);
				} catch (IOException e) {
					throw new ServiceException("Unable to upload file {}", destPath);
				}
			});
		}
	}

}
