import * as types from '../actions/types'

const initialState = []

export const saveUserData = (state = initialState, action) => {
  console.log('reducer - saveInputForm')
  switch (action.type) {
    case types.ADD_USER:
      return [
        ...state,
        {
          firstName: action.data.firstName,
          lastName: action.data.lastName,
          email: action.data.email,
          password: action.data.password,
          state: action.data.state,
          zip: action.data.zip,
        }
      ]
    default:
      return state
  }
}
