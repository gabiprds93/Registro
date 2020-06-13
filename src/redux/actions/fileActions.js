export const FILE_UPLOAD_REQUEST = 'FILE_UPLOAD_REQUEST'
export const FILE_UPLOAD_FAILURE = 'FILE_UPLOAD_FAILURE'
export const FILE_UPLOAD_SUCCESS = 'FILE_UPLOAD_SUCCESS'

export const fileUploadRequest = () => ({
  type: FILE_UPLOAD_REQUEST
})

export const fileUploadSuccess = payload => ({
  type: FILE_UPLOAD_SUCCESS,
  ...payload
})

export const fileUploadFailure = payload => ({
  type: FILE_UPLOAD_FAILURE,
  ...payload
})

export const fetchFileUpload = payload => {
  return dispatch =>{
    dispatch(fileUploadRequest())
    return fetch('https://moliemprendedor.munimolina.gob.pe/Controlador/subirarchivos1.php', {
      method: 'POST',
      body: payload
    })
    .then(response => response.json())
    .then(result => dispatch(fileUploadSuccess(result)))
    .catch(error => {
      dispatch(fileUploadFailure(error.message))
    })
  }
}