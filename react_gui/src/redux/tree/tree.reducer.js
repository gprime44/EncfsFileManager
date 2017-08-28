import { ADD_FOLDER } from './tree.action'

const nameInitialState = { path: '', name: '', folders: [] }
const initAction = { type: 'UNKNOWN' }

const tree = (state = nameInitialState, action = initAction) => {
  switch (action.type) {
    case ADD_FOLDER:
      return [...state, action.payload]
    default:
      return state
  }
}

export default tree
