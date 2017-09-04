import { connect } from 'react-redux'
import pick from 'lodash/pick'
import component from './treeview'
import { fetchFolder } from './treeview.action'
import { getByPath } from '../../../redux/tree'

const mapStateToProps = (state, { path }) => {
  console.log(`mapStateToProps ${path}`)
  const folder = getByPath(state, path)
  console.log(folder)
  const folderProps = pick(folder, ['path', 'name', 'folders'])
  return {
    ...folderProps,
  }
}

const mapDispatchToProps = (dispatch, { path }) => {
  console.log(`mapDispatchToProps ${path}`)
  return {
    onClick: () => {
      console.log(`onClick ${path}`)
      dispatch(fetchFolder(path))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(component)
