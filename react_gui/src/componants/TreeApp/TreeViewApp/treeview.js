import React, { PropTypes } from 'react'
import TreeNodeApp from '../TreeNodeApp'

const TreeViewApp = ({ nodes }) => {
  return (
    <ul>
      {nodes.map(node => (
        <TreeNodeApp key={node.path} />
      ))}
    </ul>
  )
}

TreeViewApp.propTypes = {
  nodes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}

export default TreeViewApp
