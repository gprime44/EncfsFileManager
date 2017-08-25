import { connect } from 'react-redux'
import component from './tree'
import { load } from './tree.action'

const mapStateToProps = (state) => {
  return {
    path: state.path,
    name: state.name,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch(load()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(component)
