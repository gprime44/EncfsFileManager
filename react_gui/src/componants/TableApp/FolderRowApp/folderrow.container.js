import { connect } from 'react-redux'
import pick from 'lodash/pick'
import component from './folderrow'
import { getFolder } from '../../../redux/table'
import { openSubFolder } from './folderrow.action'

const mapStateToProps = (state, { path }) => {
  const row = getFolder(state, path)
  const folderProps = pick(row, ['path', 'name', 'size', 'dateCreate', 'dateUpdate', 'state'])
  return {
    ...folderProps,
  }
}

const mapDispatchToProps = (dispatch, { path }) => {
  return {
    onFolderClick: () => {
      dispatch(openSubFolder(path))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(component)
