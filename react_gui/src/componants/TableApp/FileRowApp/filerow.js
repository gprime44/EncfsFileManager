import React from 'react'
import _ from 'lodash'
import Moment from 'react-moment'
import NumberFormat from 'react-number-format'
import PropTypes from 'prop-types'

const TableApp = ({ path, name, size, dateCreate, dateUpdate, state }) => {
  let icon = ''
  switch (_.last(_.split(name, '.'))) {
    case '.mkv':
    case '.avi':
    case '.mp4':
      icon = 'fa fa-file-video-o'
      break

    default:
      icon = 'fa fa-file-o'
  }

  return (
    <tr>
      <td><i className={icon} aria-hidden="true" title={path} />{name}</td>
      <td><Moment>{dateCreate}</Moment></td>
      <td><Moment>{dateUpdate}</Moment></td>
      <td>
        <NumberFormat
          value={_.round(size / 1000)}
          displayType={'text'}
          thousandSeparator={' '}
          suffix={' Ko'}
        />
      </td>
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
