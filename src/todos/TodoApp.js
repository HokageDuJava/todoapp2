import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import Todo from "./Todo";
import FormTodo from "./FormTodo";

class TodoApp extends Component {
  state = {
    todos: [
      { content: "Study web development", id: uuidv4() },
      { content: "Study app development", id: uuidv4() },
      { content: "Do my street workout Training", id: uuidv4() },
    ],
  };

  addTodo = (todo) => {
    todo.id = uuidv4();
    const todos = [...this.state.todos, todo];

    this.setState({
      todos,
    });
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id ? todo : null;
    });

    this.setState({
      todos,
    });
  };

  render() {
    return (
      <div>
        <h1 className="center">To-do's</h1>
        <FormTodo addTodo={this.addTodo} />
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default TodoApp;
