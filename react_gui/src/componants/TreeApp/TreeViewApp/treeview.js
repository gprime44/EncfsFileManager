import React from 'react'
import PropTypes from 'prop-types'
import SubTreeViewApp from '../TreeViewApp'

const TreeViewApp = ({ path, name, folders, onClick }) => {
  return (
    <li onClick={onClick}>
      <label title={path}>{name}</label>
      <ul>
        {folders.map(folder => (
          <SubTreeViewApp
            key={folder.path}
            path={folder.path}
            name={folder.name}
            onClick={() => onClick(folder.path)}
          />
        ))}
      </ul>
    </li>
  )
}

TreeViewApp.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  folders: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default TreeViewApp
