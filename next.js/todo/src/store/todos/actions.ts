import { uuid } from 'uuidv4'
import types from './types'

// ActionCreator
export function addTodo(task: string) {
  // Actionを返す
  return {
    type: types.ADD_TODO,
    payload: {
      id: uuid(),
//      id: 0,
      done: false,
      task,
    },
  }
}

export function doneTodo(id: string) {
  return {
    type: types.DONE_TODO,
    payload: { id },
  }
}
