import { Actions } from '../actions'
import types from './types'

interface Todo {
  id: string
  done: boolean
  task: string
}

interface State {
  todos: Todo[]
}

export function initialState(injects?: State): State {
  return {
    todos: [],
    ...injects,
  }
}

export function reducer(state = initialState(), action: Actions): State {
  switch (action.type) {
    // todosの末尾にaction.payloadを追加して返す
    case types.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] }
    // idがaction.idに一致するtodoのdoneをtrueにして返す
    case types.DONE_TODO:
      return {...state,
        todos: state.todos.map(
          todo => todo.id === action.payload.id
            ? {...todo, done: true} : todo)
        }
    default:
      return state
  }
}
