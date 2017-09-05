import { addFolder, openFolder, closeFolder, getByPath } from '../../../redux/tree'
import { displayFolder } from '../../../redux/table'

export const processFolder = path => (dispatch, getState) => {
  const folderToProcess = getByPath(getState(), path)
  if (folderToProcess.opened) {
    dispatch(closeFolder(folderToProcess))
  } else {
    fetch(`/api/content?path=${path}&withFile=true`)
      .then(response => response.json())
      .then((folder) => {
        dispatch(displayFolder(folder))
        dispatch(openFolder(folder))
        folder.folders.forEach(subFolder => dispatch(addFolder(subFolder)))
      })
  }
}
