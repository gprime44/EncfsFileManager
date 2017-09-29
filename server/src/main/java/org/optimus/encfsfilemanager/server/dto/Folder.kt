package org.optimus.encfsfilemanager.server.dto

import java.sql.Date

data class FolderDto(
		val name: String,
		val path: String,
		val size: Long,
		val dateCreate: Date,
		val dateUpdate: Date,
		val state: String,
		val files: FileDto,
		val folders: FolderDto
) 