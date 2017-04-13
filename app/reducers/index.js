import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import * as recipesReducer from './recipes'
import { saveUserData } from './userReducer'

export default combineReducers({
  recipesReducer,
  users: saveUserData,
  form: formReducer,
})
