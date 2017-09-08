import React from 'react'
import PropTypes from 'prop-types'
import SubTreeViewApp from '../TreeViewApp'

const TreeViewApp = ({ path, name, folders, opened = false, onClick }) => {
  let icon = ''
  if (opened) icon = 'fa fa-folder-open-o'
  else icon = 'fa fa-folder-o'

  return (
    <li>
      <label onClick={onClick} title={path}><i className={icon} aria-hidden="true" />{name}</label>
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
  folders: PropTypes.array.isRequired,
  opened: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

export default TreeViewApp
