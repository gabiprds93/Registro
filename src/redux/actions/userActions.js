export const USER_REGISTRY_REQUEST = 'USER_REGISTRY_REQUEST'
export const USER_REGISTRY_FAILURE = 'USER_REGISTRY_FAILURE'
export const USER_REGISTRY_SUCCESS = 'USER_REGISTRY_SUCCESS'

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'

export const GET_USERS_REQUEST = 'GET_USERS_REQUEST'
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'

export const userRegistryRequest = () => ({
  type: USER_REGISTRY_REQUEST
})

export const userRegistrySuccess = payload => ({
  type: USER_REGISTRY_SUCCESS,
  response: {...payload}
})

export const userRegistryFailure = payload => ({
  type: USER_REGISTRY_FAILURE,
  errors: {...payload}
})

export const fetchUserRegistry = payload => {
  return dispatch =>{
    dispatch(userRegistryRequest())
    return fetch('https://moliemprendedor.munimolina.gob.pe/adm_emprendedor1.php', {
      method: "POST",
      body: payload,
    })
    .then(response => response.json())
    .then(result => dispatch(userRegistrySuccess(result)))
    .catch(error => {
      dispatch(userRegistryFailure(error.message))
    })
  }
}

export const userLoginRequest = () => ({
  type: USER_LOGIN_REQUEST
})

export const userLoginSuccess = payload => ({
  type: USER_LOGIN_SUCCESS,
  response: {...payload}
})

export const userLoginFailure = payload => ({
  type: USER_LOGIN_FAILURE,
  ...payload
})

export const fetchUserLogin = payload => {
  return dispatch =>{
    dispatch(userLoginRequest())
    return fetch('https://moliemprendedor.munimolina.gob.pe/adm_login_usuario1.php', {
      method: "POST",
      body: payload,
    })
    .then(response => response.json())
    .then(result => dispatch(userLoginSuccess(result)))
    .catch(error => {
      dispatch(userLoginFailure(error.message))
    })
  }
}

export const getUsersRequest = () => ({
  type: GET_USERS_REQUEST
})

export const getUsersSuccess = payload => ({
  type: GET_USERS_SUCCESS,
  response: payload
})

export const getUsersFailure = payload => ({
  type: GET_USERS_FAILURE,
  ...payload
})

export const fetchGetUsers = payload => {
  return dispatch =>{
    dispatch(getUsersRequest())
    return fetch('https://moliemprendedor.munimolina.gob.pe/consulta_usuarios_registrados1.php', {
      method: "GET",
      body: payload,
    })
    .then(response => response.json())
    .then(result => dispatch(getUsersSuccess(result)))
    .catch(error => {
      dispatch(getUsersFailure(error.message))
    })
  }
}