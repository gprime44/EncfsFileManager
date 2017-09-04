import { connect } from 'react-redux'
import pick from 'lodash/pick'
import component from './table'
import { getTable } from '../../redux/table'

const mapStateToProps = (state) => {
  console.log('mapStateToProps')
  const folder = getTable(state)
  console.log(folder)
  const folderProps = pick(folder, ['path', 'name', 'folders', 'files'])
  return {
    ...folderProps,
  }
}

export default connect(mapStateToProps, undefined)(component)
