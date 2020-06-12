import { 
  USER_REGISTRY_REQUEST,
  USER_REGISTRY_SUCCESS,
  USER_REGISTRY_FAILURE, 
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

    default:
      return state
  }
}