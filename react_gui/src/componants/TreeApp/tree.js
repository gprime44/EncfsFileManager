import React from 'react'
import PropTypes from 'prop-types'
import TreeViewApp from './TreeViewApp'

const TreeApp = ({ rootFolder }) => {
  return (
        <div>
            <ul>
                <li>
                {rootFolder}
                    {/* {rootFolder.name}
                    {rootFolder.folders.map(childFolder => (
                        <TreeViewApp key={childFolder.path} folder={childFolder.path} />
                    ))} */}
                </li>
            </ul>
        </div>
    )
}

TreeApp.propTypes = {
  rootFolder: PropTypes.arrayOf(
        PropTypes.shape({
          path: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
}

export default TreeApp
