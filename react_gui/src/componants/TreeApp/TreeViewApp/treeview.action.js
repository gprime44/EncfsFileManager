import { addFolder } from '../../../redux/tree'

export const fetchFolder = path => (dispatch) => {
  fetch(`/api/content?path=${path}&withFile=true`)
    .then(response => response.json())
    .then(folder => dispatch(addFolder(folder)))
}
