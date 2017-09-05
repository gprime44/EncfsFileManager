import find from 'lodash/find'

export const getTree = state => state.tree

export const getByPath = (state, path) => {
  console.log(`getByPath ${path}`)
  const folder = find(getTree(state), el => el.path === path)
  if (folder) return folder
  return { path: { path }, name: '', opened: false, folders: [] }
}
