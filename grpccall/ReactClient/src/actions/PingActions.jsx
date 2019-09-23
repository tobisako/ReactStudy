export const PING_START = "PING_START"
export const PING_RESULT = "PING_RESULT"
export const PING_ERROR = "PING_ERROR"

export const pingStart = () => ({
  type: PING_START, 
  payload: {
  }
})

export const pingResult = (result) => ({
  type: PING_START, 
  payload: {
    result
  }
})

export const pingError = (error) => ({
  type: PING_ERROR, 
  payload: {
    error
  }
})
