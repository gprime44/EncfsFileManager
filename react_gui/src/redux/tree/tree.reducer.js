import findIndex from 'lodash/findIndex'
import { SET_ROOT, ADD_FOLDER } from './tree.action'

const nameInitialState = [{ path: '', name: '', expanded: false, folders: [], files: [] }]
const initAction = { type: 'UNKNOWN' }

export default (state = nameInitialState, action = initAction) => {
  console.log(`ACTION : ${action.type}`)
  switch (action.type) {
    case SET_ROOT: {
      const idx = findIndex(state, ['path', ''])
      if (idx === -1) return state
      console.log(`Index found : ${idx}`)
      const newState = [...state]
      newState[idx] = { ...action.data, expanded: true }
      console.log(newState)
      return newState
    }
    case ADD_FOLDER: {
      const idx = findIndex(state, ['path', action.data.path])
      if (idx === -1) return state
      console.log(`Index found : ${idx}`)
      const newState = [...state]
      newState[idx] = { ...action.data, expanded: true }
      console.log(newState)
      return newState
    }
    default:
      return state
  }
}
