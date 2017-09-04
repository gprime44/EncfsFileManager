import { connect } from 'react-redux'
import pick from 'lodash/pick'
import component from './folderrow'
import { getRow } from '../../../redux/table'

const mapStateToProps = (state, { path }) => {
  console.log('mapStateToProps')
  const row = getRow(state, path)
  console.log(row)
  const folderProps = pick(row, ['path', 'name', 'size', 'dateCreate', 'dateUpdate', 'state'])
  return {
    ...folderProps,
  }
}

export default connect(mapStateToProps, undefined)(component)
