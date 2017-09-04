import find from 'lodash/find'

export const getTable = state => state.table

export const getRow = (state, path) => {
  console.log(`getRow ${path}`)
  return find(getTable(state).folders, el => el.path === path)
}
