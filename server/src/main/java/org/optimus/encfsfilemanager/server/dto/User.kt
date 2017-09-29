package org.optimus.encfsfilemanager.server.dto

data class UserDto(
		val login: String = "",
		val name: String = "",
		val admin: Boolean = false
)
