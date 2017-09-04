import React from 'react'
import Moment from 'react-moment'
import PropTypes from 'prop-types'

const TableApp = ({ path, name, size, dateCreate, dateUpdate, state }) => {
  return (
    <tr>
      <td>{name}</td>
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
}

export default TableApp
