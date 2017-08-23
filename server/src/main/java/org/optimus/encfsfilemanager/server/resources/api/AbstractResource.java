package org.optimus.encfsfilemanager.server.resources.api;

import org.apache.commons.lang3.StringUtils;
import org.optimus.encfsfilemanager.server.dto.UserDto;
import org.optimus.encfsfilemanager.server.exception.ServiceException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.context.SecurityContextHolder;

public class AbstractResource {

	@Value("${admin.login}")
	private String ADMIN_LOGIN;

	protected UserDto getUser() {
		String currentUser = SecurityContextHolder.getContext().getAuthentication().getName();
		if (StringUtils.isEmpty(currentUser)) {
			throw new ServiceException("User not logged");
		}

		UserDto userDto = new UserDto();
		userDto.setLogin(currentUser);
		userDto.setName(currentUser);
		userDto.setAdmin(StringUtils.equals(currentUser, ADMIN_LOGIN));
		return userDto;
	}

}
