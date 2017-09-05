export const OPEN_FOLDER = 'OPEN_FOLDER'
export const openFolder = (folder) => {
  console.log('OPEN_FOLDER')
  return {
    type: OPEN_FOLDER,
    data: folder,
  }
}

export const CLOSE_FOLDER = 'CLOSE_FOLDER'
export const closeFolder = (folder) => {
  console.log(`CLOSE_FOLDER ${folder.path}`)
  return {
    type: CLOSE_FOLDER,
    data: folder,
  }
}

export const ADD_FOLDER = 'ADD_FOLDER'
export const addFolder = (folder) => {
  console.log('ADD_FOLDER')
  return {
    type: ADD_FOLDER,
    data: folder,
  }
}

export const REMOVE_FOLDER = 'REMOVE_FOLDER'
export const removeFolder = (folder) => {
  console.log('REMOVE_FOLDER')
  return {
    type: REMOVE_FOLDER,
    data: folder,
  }
}
