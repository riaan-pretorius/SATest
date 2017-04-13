import * as types from './types'

export const saveUserData = (data) => {
  console.log('action')
  return {
    type: types.ADD_USER,
    data
  }
}
