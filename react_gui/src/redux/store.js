import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { createStoreWithRouter, initializeCurrentLocation } from 'redux-little-router'
import thunkMiddleware from 'redux-thunk'
import tree from './tree'

const store = createStore(
  combineReducers({
    tree,
  }),
  compose(
    applyMiddleware(thunkMiddleware),
    /* eslint-env browser */
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const initialLocation = store.getState().router
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation))
}

export default store
