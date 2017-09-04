import { connect } from 'react-redux'
import pick from 'lodash/pick'
import component from './tree'
import { fetchRoot } from './tree.action'
import { getByPath } from '../../redux/tree'

const mapStateToProps = (state) => {
  console.log('mapStateToProps')
  const rootFolder = getByPath(state, '')
  console.log(rootFolder)
  const folderProps = pick(rootFolder, ['path', 'name', 'folders'])
  return {
    ...folderProps,
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('mapDispatchToProps')
  return {
    onClick: () => {
      console.log('onClick')
      dispatch(fetchRoot())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(component)
