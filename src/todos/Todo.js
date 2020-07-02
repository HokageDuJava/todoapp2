import React from "react";

const Todo = ({ todos, deleteTodo }) => {
  const todosList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <p
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.content}
          </p>
        </div>
      );
    })
  ) : (
    <div className="collection-item">
      <p>There's no To-do in the list !</p>
    </div>
  );

  return <div className="collection">{todosList}</div>;
};

export default Todo;
