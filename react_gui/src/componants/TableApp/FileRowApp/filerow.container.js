import { connect } from 'react-redux'
import pick from 'lodash/pick'
import component from './filerow'
import { getFile } from '../../../redux/table'

const mapStateToProps = (state, { path }) => {
  const row = getFile(state, path)
  const folderProps = pick(row, ['path', 'name', 'size', 'dateCreate', 'dateUpdate', 'state'])
  return {
    ...folderProps,
  }
}

export default connect(mapStateToProps, undefined)(component)
