import React from 'react'
import PropTypes from 'prop-types'
import FolderRowApp from './FolderRowApp'
import FileRowApp from './FileRowApp'

const TableApp = ({ path, name, folders, files }) => {
    return (
        <table className="table table-hover table-striped table-condensed">
            <caption>{name} ({path})</caption>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Date de création</th>
                    <th>Date de modification</th>
                    <th>Taille</th>
                    <th>Etat</th>
                </tr>
            </thead>
            <tbody>
                {folders.map(folder => (
                    <FolderRowApp
                        key={folder.path}
                        path={folder.path}
                    />
                ))}
                {files.map(file => (
                    <FileRowApp
                        key={file.path}
                        path={file.path}
                    />
                ))}
            </tbody>
        </table>
    )
}

TableApp.propTypes = {
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    folders: PropTypes.array.isRequired,
    files: PropTypes.array.isRequired,
}

export default TableApp
