import { User } from '@store/auth/index'
import types from './types'

export function requestLogin() {
  return {
    type: types.FETCH_LOGIN,
  }
}

export function successLogin(user: User) {
  return {
    type: types.FETCH_LOGIN_SUCCESS,
    payload: {
      user
    }
  }
}

export function failureLogin() {
  return {
    type: types.FETCH_LOGIN_FAILURE
  }
}
