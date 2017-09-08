import React from 'react'
import PropTypes from 'prop-types'
import loader from 'hoc-react-loader'
import TreeViewApp from './TreeViewApp'

const TreeApp = ({ path, name, folders, opened = false }) => {
    let icon = ''
    if (opened) icon = 'fa fa-folder-open-o'
    else icon = 'fa fa-folder-o'

    return (
        <div>
            <ul>
                <li >
                    <label title={path}>
                        <i className={icon} aria-hidden="true" />{name}
                    </label>
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
    opened: PropTypes.bool,
}

export default loader()(TreeApp)
