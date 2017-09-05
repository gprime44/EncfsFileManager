import { addFolder, openFolder, closeFolder, getByPath } from '../../redux/tree'
import { displayFolder } from '../../redux/table'

export const processRoot = () => (dispatch, getState) => {
  const rootFolder = getByPath(getState(), '')
  if (rootFolder.opened) {
    dispatch(closeFolder(rootFolder))
  } else {
    fetch(`/api/content?path=&withFile=true`)
      .then(response => response.json())
      .then((folder) => {
        dispatch(displayFolder(folder))
        dispatch(openFolder(folder))
        folder.folders.forEach(subFolder => dispatch(addFolder(subFolder)))
      })
  }
}
