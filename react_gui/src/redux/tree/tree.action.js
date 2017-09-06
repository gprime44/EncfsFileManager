export const OPEN_FOLDER = 'OPEN_FOLDER'
export const openFolder = (folder) => {
  return {
    type: OPEN_FOLDER,
    data: folder,
  }
}

export const CLOSE_FOLDER = 'CLOSE_FOLDER'
export const closeFolder = (folder) => {
  return {
    type: CLOSE_FOLDER,
    data: folder,
  }
}

export const ADD_FOLDER = 'ADD_FOLDER'
export const addFolder = (folder) => {
  return {
    type: ADD_FOLDER,
    data: folder,
  }
}

export const REMOVE_FOLDER = 'REMOVE_FOLDER'
export const removeFolder = (folder) => {
  return {
    type: REMOVE_FOLDER,
    data: folder,
  }
}
