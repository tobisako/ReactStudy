import LoginForm from '@components/organisms/LoginForm/LoginForm'
import TodoForm from '@components/organisms/TodoForm/TodoForm'
import { Button } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { StoreState } from '@store/index'
import { doneTodo } from '@store/todos/actions'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

/**
 * TopPage
 */
const TopPage = () => {
  const dispatch = useDispatch()
  // ユーザ情報も取得するように編集
  const [todos, user] = useSelector((state: StoreState) => [
    state.todos.todos,
    state.auth.user
  ])
  
  return (
    <main>
      <Container maxWidth="xs">
      <h1>Hello, World</h1>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>
            <span
              style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
            >
              {todo.task}
            </span>
            <Button
              variant="contained"
              color="primary"
              disabled={todo.done}
              onClick={() => dispatch(doneTodo(todo.id))}
              style={{ marginLeft: 10 }}
            >
              DONE
            </Button>
          </li>
        ))}
      </ul>
      <TodoForm />
      <h2>Login</h2>
      <div>
        {user ? 'こんにちは！' + user.name + 'さん' : 'ログインしてください'}
      </div>
      <LoginForm />
      </Container>
    </main>
  )
}

export default TopPage
