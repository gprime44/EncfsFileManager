import { connect } from 'react-redux'
import component from './treeview'
import { load } from './treeview.action'

const mapStateToProps = (state) => {
  return {
    nodes: state.folder,
  }
}

const mapDispatchToProps = (dispatch, { path }) => {
  return {
    load: () => dispatch(load(path)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(component)
