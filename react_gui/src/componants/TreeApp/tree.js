import React from 'react'
import PropTypes from 'prop-types'
import TreeViewApp from './TreeViewApp'

const TreeApp = ({ path, name, folders, opened = false, onClick }) => {
    let icon = ''
    if (opened) icon = 'fa fa-folder-open-o'
    else icon = 'fa fa-folder-o'

    return (
        <div>
            <ul>
                <li onClick={onClick}>
                    <i className={icon} aria-hidden="true"></i>
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
    folders: PropTypes.array.isRequired,
    opened: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default TreeApp
