import find from 'lodash/find'

export const getTable = state => state.table

export const getFolder = (state, path) => find(getTable(state).folders, el => el.path === path)

export const getFile = (state, path) => find(getTable(state).files, el => el.path === path)
