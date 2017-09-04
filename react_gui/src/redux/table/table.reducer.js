import { DISPLAY_FOLDER } from './table.action'

const nameInitialState = { path: '', name: '', folders: [], files: [] }
const initAction = { type: 'UNKNOWN' }

export default (state = nameInitialState, action = initAction) => {
  console.log(`ACTION : ${action.type}`)
  switch (action.type) {
    case DISPLAY_FOLDER: {
      return action.data
    }
    default:
      return state
  }
}
