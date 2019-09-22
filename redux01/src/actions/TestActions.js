export const ADD_VALUE = '@@myapp/ADD_VALUE'
export const ASYNC_COUNT_START = "ASYNC_COUNT_START"
export const ASYNC_COUNT_NOTICE = "ASYNC_COUNT_NOTICE"
export const ASYNC_COUNT_DONE = "ASYNC_COUNT_DONE"
export const SELECT_SCENE_1 = "SELECT_SCENE_1"
export const SELECT_SCENE_2 = "SELECT_SCENE_2"

export const addValue = (amount) => ({
  type: ADD_VALUE, 
  payload: {
    amount,
  }
})

export const asyncCountStart = (times) => ({
  type: ASYNC_COUNT_START, 
  payload: {
    times
  }
})

export const asyncCountNotice = (amount) => ({
  type: ASYNC_COUNT_NOTICE, 
  payload: {
    amount
  }
})

export const asyncCountDone = () => ({
  type: ASYNC_COUNT_DONE, 
  payload: {
  }
})

export const selectScene1 = () => ({
  type: SELECT_SCENE_1,
  payload: {
  }
})

export const selectScene2 = (name, age, sex) => ({
  type: SELECT_SCENE_2,
  payload: {
    name,
    age,
    sex,
  }
})
