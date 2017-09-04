import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import tree from './tree'
import table from './table'

const store = createStore(
  combineReducers({
    tree,
    table,
  }),
  applyMiddleware(thunkMiddleware),
)

export default store
