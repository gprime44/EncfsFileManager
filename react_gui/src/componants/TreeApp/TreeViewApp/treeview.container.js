import { connect } from 'react-redux'
import component from './treeview'
import { load } from './treeview.action'

const mapStateToProps = (state) => {
  return {
    path: state.path,
    name: state.name,
    folders: state.folders,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (path) => {
      dispatch(load(path))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(component)
