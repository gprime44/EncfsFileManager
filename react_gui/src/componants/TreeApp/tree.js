import React from 'react'
import PropTypes from 'prop-types'
import TreeViewApp from './TreeViewApp'

const TreeApp = ({ path, name, folders, onClick }) => {
    return (
        <div>
            <ul>
                <li onClick={onClick}>
                    <label title={path}>{name}</label>
                    <ul>
                        {folders.map(folder => (
                            <TreeViewApp
                                key={folder.path}
                                path={folder.path}
                            />
                        ))}
                    </ul>
                </li>
            </ul>
        </div >
    )
}

TreeApp.propTypes = {
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    folders: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default TreeApp
