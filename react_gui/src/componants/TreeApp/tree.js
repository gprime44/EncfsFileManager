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
                                name={folder.name}
                                onClick={() => onClick(folder.path)}
                            />
                        ))}
                    </ul>
                </li>
            </ul>
        </div >
    )
}

TreeApp.propTypes = {
    path: PropTypes.func.isRequired,
    name: PropTypes.func.isRequired,
    folders: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.number.isRequired,
            name: PropTypes.bool.isRequired,
        }).isRequired,
    ).isRequired,
    onClick: PropTypes.func.isRequired,
}

export default TreeApp
