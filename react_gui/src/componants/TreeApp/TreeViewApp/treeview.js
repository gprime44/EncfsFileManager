import React from 'react'
import PropTypes from 'prop-types'
import SubTreeViewApp from '../TreeViewApp'
import styles from './treeview.style.scss'

const TreeViewApp = ({ path, name, folders, opened = false, onClick }) => {
  let icon = ''
  if (opened) icon = 'fa fa-folder-open-o'
  else icon = 'fa fa-folder-o'

  return (
    <div className={styles.treeItem}>
      <label onClick={onClick} title={path}><i className={icon} aria-hidden="true" />{name}</label>
      {folders.map(folder => (
        <SubTreeViewApp
          key={folder.path}
          path={folder.path}
          name={folder.name}
          onClick={() => onClick(folder.path)}
        />
      ))}
    </div>
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
