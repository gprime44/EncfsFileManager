export const getTree = state => state.tree

export const getByPath = (state, path) => {
  const folder = getTree(state)[path]
  if (folder) return folder
  return { path: { path }, name: '', opened: false, folders: [] }
}
