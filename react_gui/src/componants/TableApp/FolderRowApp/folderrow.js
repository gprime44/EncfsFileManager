import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'

const TableApp = ({ path, name, size, dateCreate, dateUpdate, state, onFolderClick }) => {
  return (
    <tr>
      <td onClick={onFolderClick}>
        <i className="fa fa-folder-o" aria-hidden="true" title={path} />{name}
      </td>
      <td><Moment>{dateCreate}</Moment></td>
      <td><Moment>{dateUpdate}</Moment></td>
      <td>{size}</td>
      <td>{state}</td>
    </tr>
  )
}

TableApp.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  dateCreate: PropTypes.number.isRequired,
  dateUpdate: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
  onFolderClick: PropTypes.func.isRequired,
}

export default TableApp
