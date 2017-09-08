import { OPEN_FOLDER, CLOSE_FOLDER, ADD_FOLDER, REMOVE_FOLDER } from './tree.action'

const nameInitialState = { '': { path: '', name: '', opened: false, folders: [], files: [] } }
const initAction = { type: 'UNKNOWN' }

export default (state = nameInitialState, action = initAction) => {
  switch (action.type) {
    case OPEN_FOLDER: {
      if (!state[action.data.path]) return state

      // Change folder state -> opened
      const newState = { ...state }
      newState[action.data.path] = { ...action.data, opened: true }

      return newState
    }
    case CLOSE_FOLDER: {
      if (!state[action.data.path]) return state

      const newState = { ...state }
      // Delete children
      action.data.folders.forEach(folderToDelete => delete newState[folderToDelete.path])
      // Change folder state -> closed
      newState[action.data.path] = { ...action.data, opened: false, folders: [] }

      return newState
    }
    case ADD_FOLDER: return { ...state, [action.data.path]: action.data }
    case REMOVE_FOLDER: return [...state].filter(folder => folder.path !== action.data.path)

    default:
      return state
  }
}
