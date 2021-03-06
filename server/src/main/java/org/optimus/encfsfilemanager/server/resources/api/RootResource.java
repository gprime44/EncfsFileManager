package org.optimus.encfsfilemanager.server.resources.api;

import org.optimus.encfsfilemanager.server.dto.UserDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class RootResource extends AbstractResource {

	private final static Logger LOGGER = LoggerFactory.getLogger(RootResource.class);

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<UserDto> getContainerStats()  {
		LOGGER.info("User {} logged", getUser());
		return ResponseEntity.ok(getUser());
	}

}
