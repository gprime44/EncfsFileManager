package org.optimus.encfsfilemanager.server.dto

import java.util.Date

data class FileDto(
		val name: String,
		val path: String,
		val size: Long,
		val dateCreate: Date,
		val dateUpdate: Date,
		val state: String
)