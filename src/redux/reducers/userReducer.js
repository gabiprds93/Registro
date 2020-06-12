import { 
  USER_REGISTRY_REQUEST,
  USER_REGISTRY_SUCCESS,
  USER_REGISTRY_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE, 
} from "../actions/userActions";

const initialState = {
  isFetching: false,
  registryResponse: undefined,
  errors: undefined,
}

export default function reducer(
  state = initialState,
  action,
){
  switch (action.type) {
    case USER_REGISTRY_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        registryResponse: ''
      })

    case USER_REGISTRY_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        registryResponse: action.response,
      })

    case USER_REGISTRY_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errors: action.errors,
      })
      
    case USER_LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        loginResponse: ''
      })

    case USER_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        loginResponse: action.response,
      })

    case USER_LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errors: action.errors,
      })

    default:
      return state
  }
}