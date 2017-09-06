export const DISPLAY_FOLDER = 'DISPLAY_FOLDER'
export const displayFolder = (folder) => {
  return {
    type: DISPLAY_FOLDER,
    data: folder,
  }
}
