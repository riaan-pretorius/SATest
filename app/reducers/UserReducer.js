import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = []

export const saveUserData = (state = initialState, action) => {
  console.log('saveUserData')
  switch (action.types) {
    case types.ADD_USER:
      return [
        ...state,
        {
          fullName: action.data.fullName,
          email: action.data.email,
          password: action.data.password,
          state: action.data.state,
          zip: action.data.zip
        }
      ]
    default:
      console.log('default')
      return state
  }
}
