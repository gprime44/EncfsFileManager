import React, { PropTypes } from 'react'
import TreeViewApp from '../TreeViewApp'

const TreeNodeApp = ({ label }) => {
  return (
    <li>
      {label}
      <TreeViewApp />
    </li>
  )
}

TreeNodeApp.propTypes = {
  label: PropTypes.string,
}

export default TreeNodeApp
