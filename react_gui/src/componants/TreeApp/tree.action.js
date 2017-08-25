import { fetchFolder } from '../../redux/tree'

export const load = () => (dispatch) => {
  dispatch(fetchFolder())
}
