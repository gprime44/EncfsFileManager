import { setRoot, addFolder } from '../../redux/tree'
import { displayFolder } from '../../redux/table'

export const fetchRoot = () => (dispatch) => {
  fetch(`/api/content?path=&withFile=true`)
    .then(response => response.json())
    .then((folder) => {
      dispatch(setRoot(folder))
      dispatch(displayFolder(folder))
      folder.folders.forEach(subFolder => dispatch(addFolder(subFolder)))
    })
}
