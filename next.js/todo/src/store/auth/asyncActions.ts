import { LoginFormValues } from '@components/organisms/LoginForm/LoginForm'
import { Action, Dispatch } from 'redux'
import { failureLogin, requestLogin, successLogin } from '@store/auth/actions'
import api from '@common/api'

export function login(values: LoginFormValues) {
  return async (dispatch: Dispatch<Action>) => {
    // リクエストスタート(リクエスト開始状態にする)
    dispatch(requestLogin());
    return api({
      method: "post",
      url: '/api/login',
      data: {
        'login_id': values.login_id,
        'password': values.password
      }
    }).then((response) => {
      // リクエスト成功(アクセストークンをローカルに保存)
      localStorage.setItem('jwt', response.data.access_token)
      // リクエスト成功状態にして、ユーザ情報を渡す
      dispatch(successLogin(response.data.user))
    }).catch((response) => {
      console.log("ERR: " + JSON.stringify(response));
      // リクエスト失敗
      dispatch(failureLogin())
    })
  };
}
