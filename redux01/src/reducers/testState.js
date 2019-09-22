import { ADD_VALUE, ASYNC_COUNT_START, ASYNC_COUNT_NOTICE, ASYNC_COUNT_DONE, SELECT_SCENE_1, SELECT_SCENE_2 } from '../actions'

const initialState = {
  scene: 1,
  title: "最初",
  amount: 5,
  async_amount: 0,
  async_wait: false
}

const testState = (state = initialState, action) => {
  console.log("testState[" + action.type + "]" )
  switch (action.type) {
    case ADD_VALUE:
      return {
        ...state,
        amount: state.amount + action.payload.amount
      }
    case ASYNC_COUNT_START:
      return {
        ...state,
        async_wait: true,
        times: action.payload.times,
      }
    case ASYNC_COUNT_NOTICE:
      return {
        ...state,
        async_amount: state.async_amount + action.payload.amount
      }
    case ASYNC_COUNT_DONE:
        return {
          ...state,
          async_wait: false,
        }
    case SELECT_SCENE_1:
      return {
        ...state,
        scene: 1,
        title: "シーン壱"
      }
    case SELECT_SCENE_2:
      console.log("SELECT_SCENE_2", action.payload.name.name )
      return {
        ...state,
        scene: 2,
        title: "シーン2",
        name: action.payload.name,
        sex: action.payload.sex
      }
    default:
        console.log("default")
        return state;
  }
}

export default testState
