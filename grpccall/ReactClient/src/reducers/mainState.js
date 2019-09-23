import { PING_START, PING_RESULT, PING_ERROR } from '../actions'

const initialState = {
  message: "",
  ping_wait: false
}

const mainState = (state = initialState, action) => {
  console.log("testState[" + action.type + "]" )
  switch (action.type) {
    case PING_START:
      return {
        ...state,
        message: "ping中です",
        ping_wait: true
      }
    case PING_RESULT:
      return {
        ...state,
        message: "",
        ping_wait: false
      }
    case PING_ERROR:
      console.log("PING_ERROR")
      return {
        ...state,
        message: "エラー",
        ping_wait: false
      }
    default:
      console.log("default")
      return state;
  }
}

export default mainState
