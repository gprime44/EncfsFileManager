import { connect } from 'react-redux'
import component from './tree'
import { load } from './tree.action'

const mapStateToProps = (state) => {
  return {
    nodes: state.nodes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => dispatch(load()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(component)
