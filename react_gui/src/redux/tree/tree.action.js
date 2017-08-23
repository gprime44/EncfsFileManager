import { API_URL } from '../constants'

export const ADD_FOLDER = 'ADD_FOLDER'
export const addFolder = (folder) => {
  return {
    type: ADD_FOLDER,
    payload: folder,
  }
}

export const fetchFolder = path => (dispatch) => {
  fetch(`${API_URL}/content?path=${path}&withFile=false`)
    .then(raw => raw.json())
    .then(folder => dispatch(addFolder(folder)))
}
