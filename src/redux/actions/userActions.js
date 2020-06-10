export const USER_REGISTRY_REQUEST = 'USER_REGISTRY_REQUEST'
export const USER_REGISTRY_FAILURE = 'USER_REGISTRY_FAILURE'
export const USER_REGISTRY_SUCCESS = 'USER_REGISTRY_SUCCESS'

export const userRegistryRequest = () => ({
  type: USER_REGISTRY_REQUEST
})

export const userRegistrySuccess = payload => ({
  type: USER_REGISTRY_SUCCESS,
  ...payload
})

export const userRegistryFailure = payload => ({
  type: USER_REGISTRY_FAILURE,
  ...payload
})

export const fetchUserRegistry = payload => {
  return dispatch =>{
    dispatch(userRegistryRequest())
    return fetch('https://moliemprendedor.munimolina.gob.pe/adm_emprendedor1.php', {
      method: "POST",
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify(payload),
    })
    .then(response => response.json())
    .then(result => dispatch(userRegistrySuccess(result)))
    .catch(error => {
      dispatch(userRegistryFailure(error.message))
    })
  }
}