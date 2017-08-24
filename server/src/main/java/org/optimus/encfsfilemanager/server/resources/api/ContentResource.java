package org.optimus.encfsfilemanager.server.resources.api;

import org.apache.commons.lang3.StringUtils;
import org.optimus.encfsfilemanager.server.dto.FolderDto;
import org.optimus.encfsfilemanager.server.services.FileService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/content")
public class ContentResource extends AbstractResource {

	private final static Logger LOGGER = LoggerFactory.getLogger(ContentResource.class);

	@Autowired
	private FileService fileService;

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<FolderDto> getFolderContent(@RequestParam(required = true, name = "path") String path, //
			@RequestParam("withFile") boolean withFile) {

		LOGGER.info("User {} get folder content {}", getUser(), path);

		if (StringUtils.isEmpty(path)) {
			path = StringUtils.EMPTY;
		}

		FolderDto folderDto = fileService.getFolderContent(path, withFile);

		return ResponseEntity.ok(folderDto);
	}

}