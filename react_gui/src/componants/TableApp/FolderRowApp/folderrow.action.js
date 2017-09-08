import { openFolder, addFolder } from '../../../redux/tree'
import { displayFolder } from '../../../redux/table'

export const openSubFolder = path => (dispatch) => {
  fetch(`/api/content?path=${path}&withFile=true`)
    .then(response => response.json())
    .then((folder) => {
      dispatch(displayFolder(folder))
      dispatch(openFolder(folder))
      folder.folders.forEach(subFolder => dispatch(addFolder(subFolder)))
    })
}
