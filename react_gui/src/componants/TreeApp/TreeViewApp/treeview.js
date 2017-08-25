import React from 'react'
import PropTypes from 'prop-types'

const TreeViewApp = ({ folder, onClick }) => {
  return (
    <ul>
      <li>
        {folder.name}
        {folder.folders.map(childFolder => (
          <TreeViewApp key={childFolder.path} folder={childFolder.path} />
        ))}
      </li>
    </ul>
  )
}

TreeViewApp.propTypes = {
  folder: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default TreeViewApp
