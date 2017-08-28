import { fetchFolder } from '../../../redux/tree'

export const load = path => (dispatch) => {
  dispatch(fetchFolder(path))
}
