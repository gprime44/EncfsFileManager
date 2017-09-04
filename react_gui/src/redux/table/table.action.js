export const DISPLAY_FOLDER = 'DISPLAY_FOLDER'
export const displayFolder = (folder) => {
  console.log('DISPLAY_FOLDER')
  return {
    type: DISPLAY_FOLDER,
    data: folder,
  }
}
