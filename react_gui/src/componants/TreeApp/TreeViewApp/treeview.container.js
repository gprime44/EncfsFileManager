import { connect } from 'react-redux'
import pick from 'lodash/pick'
import component from './treeview'
import { processFolder } from './treeview.action'
import { getByPath } from '../../../redux/tree'

const mapStateToProps = (state, { path }) => {
  const folder = getByPath(state, path)
  const folderProps = pick(folder, ['path', 'name', 'folders', 'opened'])
  return {
    ...folderProps,
  }
}

const mapDispatchToProps = (dispatch, { path }) => {
  return {
    onClick: () => {
      dispatch(processFolder(path))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(component)
