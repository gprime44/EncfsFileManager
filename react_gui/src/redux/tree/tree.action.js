export const SET_ROOT = 'SET_ROOT'
export const setRoot = (folder) => {
  console.log('SET_ROOT')
  return {
    type: SET_ROOT,
    data: folder,
  }
}

export const ADD_FOLDER = 'ADD_FOLDER'
export const addFolder = (folder) => {
  console.log(`ADD_FOLDER ${folder.path}`)
  return {
    type: ADD_FOLDER,
    data: folder,
  }
}

