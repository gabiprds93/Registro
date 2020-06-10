import { 
  USER_REGISTRY_REQUEST,
  USER_REGISTRY_SUCCESS,
  USER_REGISTRY_FAILURE, 
} from "../actions/userActions";

const initialState = {
  isFetching: false,
  profile: undefined,
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
      })

    case USER_REGISTRY_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        profile: action.data,
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