package org.optimus.encfsfilemanager.server.resources.api;

import java.nio.file.Path;

import org.optimus.encfsfilemanager.server.dto.UserDto;
import org.optimus.encfsfilemanager.server.services.FileService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/file")
public class FileResource extends AbstractResource {

	private final static Logger LOGGER = LoggerFactory.getLogger(FileResource.class);

	@Autowired
	private FileService fileService;

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<FileSystemResource> get(@RequestParam(required = true, name = "path") String path) {

		LOGGER.info("User {} get {}", getUser(), path);

		Path file = fileService.getFileInGlobalFolder(path);

		FileSystemResource fileSystemResource = new FileSystemResource(file.toFile());
		return new ResponseEntity<>(fileSystemResource, HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@RequestParam(required = true, name = "path") String path) throws Exception {

		UserDto user = getUser();

		if (user.isAdmin()) {
			LOGGER.info("User {} delete {}", path);
			fileService.delete(path);
			return ResponseEntity.ok().build();
		} else {
			LOGGER.info("User {} can't delete file", user);
			return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
		}

	}

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Void> addFile(@RequestParam(required = true, name = "path") String path, //
			@RequestParam(required = true, name = "file") MultipartFile[] files) throws Exception {

		UserDto user = getUser();

		if (user.isAdmin()) {
			LOGGER.info("User {} add files to {}", user, path);
			fileService.saveFiles(path, files);
			return ResponseEntity.ok().build();
		} else {
			LOGGER.info("User {} can't add file", user);
			return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
		}
	}
}
