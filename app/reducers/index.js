import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import * as recipesReducer from './recipes'
import { UserReducer } from './UserReducer'

export default combineReducers({
	recipesReducer,
	users: UserReducer,
	form: formReducer,
});
