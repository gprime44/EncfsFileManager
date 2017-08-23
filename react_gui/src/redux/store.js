import { createStore, combineReducers } from 'redux'
import tree from './tree'

const store = createStore(
  combineReducers({
    tree,
  }),
)

export default store
