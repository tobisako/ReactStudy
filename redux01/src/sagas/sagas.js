//import {all, call, fork, put, select, take} from "redux-saga/effects"
import {delay, fork, put, take} from "redux-saga/effects"
import { ASYNC_COUNT_START } from '../actions'
import { asyncCountNotice, asyncCountDone } from '../actions/TestActions'

function* handleRequestDummy() {
  while (true) {
    const action = yield take(ASYNC_COUNT_START);
    console.log("saga:ASYNC_COUNT_START times=" + action.payload.times)
    for(let i = 0; i < action.payload.times; i++) {
      yield delay(700)
      yield put(asyncCountNotice(1))
    }
    yield put(asyncCountDone())
  }
}

export default function* rootSaga() {
  yield fork(handleRequestDummy);
}
