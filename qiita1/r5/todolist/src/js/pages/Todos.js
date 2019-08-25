import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";  // * 記号を使うことで、TodoActions.js 内のすべての要素を一度にimport することができます。
import TodoStore from "../stores/TodoStore";

export default class Todos extends React.Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);   // メモリリーク対策
    this.state = {
      todos: TodoStore.getAll()
    };
  }

  componentDidMount() {
    TodoStore.on("change", () => {
      this.setState({
      todos: TodoStore.getAll()
      });
    });
    TodoStore.on("change", this.getTodos);  // メモリリーク対策
    console.log("count", TodoStore.listenerCount("change"));
  }

  // メモリリーク対策
  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  // メモリリーク対策
  getTodos() {
    this.setState({
      todos: TodoStore.getAll()
    });
  }

  createTodo() {
    TodoActions.createTodo("New Todo");
  }

  reloadTodos() {
    TodoActions.reloadTodos();
  }
 
  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
      return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <button onClick={this.reloadTodos.bind(this)}>Reload!</button>
        <h1>Todos</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}

//         <button onClick={this.createTodo.bind(this)}>Create!</button>
