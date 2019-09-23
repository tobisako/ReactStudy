import { call, fork, put, take} from "redux-saga/effects"
import { PING_START } from '../actions'
import { pingResult, pingError } from '../actions'  // /PingActions'
import MyService from '../libs/services/MyService'

function* handleRequest() {
  while (true) {
    const action = yield take(PING_START);
    console.log("saga:PING_START")

    const {result, error} = yield call(
      MyService.callPing,
      123
    )
    console.log("saga:after call - ")

    if (error) {
      console.log("saga:ERR! - ", error)
      yield put(pingError())
    } else {
      console.log("saga:OK! - ", result)
      yield put(pingResult())
    }

  }
}

export default function* rootSaga() {
  yield fork(handleRequest);
}
