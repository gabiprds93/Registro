import { combineReducers } from 'redux'
import { reducer } from 'redux-form'

import userReducer from './userReducer'

const rootReducer = combineReducers({
  form: reducer,
  user: userReducer
})

export default rootReducer