import { fetchNode } from 'redux/tree'

export const load = () => (dispatch) => {
  dispatch(fetchNode())
}
