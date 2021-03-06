import { connect } from 'react-redux'
import pick from 'lodash/pick'
import component from './tree'
import { processRoot } from './tree.action'
import { getByPath } from '../../redux/tree'

const mapStateToProps = (state) => {
  const rootFolder = getByPath(state, '')
  const folderProps = pick(rootFolder, ['path', 'name', 'folders', 'opened'])
  return {
    loaded: folderProps.opened,
    ...folderProps,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => dispatch(processRoot()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(component)
