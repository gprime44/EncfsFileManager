import findIndex from 'lodash/findIndex'
import uniq from 'lodash/uniq'
import { OPEN_FOLDER, CLOSE_FOLDER, ADD_FOLDER, REMOVE_FOLDER } from './tree.action'

const nameInitialState = [{ path: '', name: '', opened: false, folders: [], files: [] }]
const initAction = { type: 'UNKNOWN' }

export default (state = nameInitialState, action = initAction) => {
  switch (action.type) {
    case OPEN_FOLDER: {
      const idx = findIndex(state, ['path', action.data.path])
      if (idx === -1) return state

      // Change folder state -> opened
      const newState = [...state]
      newState[idx] = { ...action.data, opened: true }

      return newState
    }
    case CLOSE_FOLDER: {
      const idx = findIndex(state, ['path', action.data.path])
      if (idx === -1) return state

      // Change folder state -> closed
      const newState = [...state]
      newState[idx] = { ...action.data, opened: false }

      // Delete children
      action.data.folders.forEach(folderToDelete =>
        newState.filter(folder => folder.path !== folderToDelete.path))

      return newState
    }
    case ADD_FOLDER: return uniq([...state, action.data])
    case REMOVE_FOLDER: return [...state].filter(folder => folder.path !== action.data.path)

    default:
      return state
  }
}
