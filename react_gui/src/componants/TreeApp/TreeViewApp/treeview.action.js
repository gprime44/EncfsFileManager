import { fetchFolder } from '../../../redux/tree'

export const load = () => (dispatch, { path }) => {
  dispatch(fetchFolder(path))
}
