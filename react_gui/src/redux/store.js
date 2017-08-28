import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import tree from './tree'

const store = createStore(
  combineReducers({
    tree,
  }),
  applyMiddleware(thunkMiddleware),
)

export default store
