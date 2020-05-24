import { Actions } from '../actions'
import types from './types'

export interface User {
  name: string
}

interface State {
  isFetching: boolean
  user?: User
  //user: User
}

export function initialState(injects?: State): State {
  return {
    isFetching: false,
    user: undefined,
    ...injects,
  }
}

export function reducer(state = initialState(), action: Actions): State {
  switch (action.type) {
    // リクエストスタート 通信中の状態にする(isFetching=true)
    case types.FETCH_LOGIN:
      return { ...state, isFetching: true }
    // リクエスト成功 通信終了(isFetching=false)にし、取得したユーザ情報を保存する
    case types.FETCH_LOGIN_SUCCESS:
      return { ...state, isFetching: false, user: action.payload.user }
    // リクエスト失敗 通信終了(isFetching=false)にすること以外今回は何もしない
    case types.FETCH_LOGIN_FAILURE:
      return { ...state, isFetching: false }
    default:
      return state
  }
}
