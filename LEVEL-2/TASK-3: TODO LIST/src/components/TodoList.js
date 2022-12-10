import React, { useState } from "react";
import Todo from "./Todo";
import TodoForms from "./TodoForms";
export default function TodoList() {
  const [todos, setTodos] = useState([]);
  //for adding a todo item
  const addTodo = (todo) => {
    if (!todo.text) {
      return;
    }
    const newTodos = [todo, ...todos];
    // const oldTodo=todos;
    // todos.push(todo);
    setTodos(newTodos);
  };

  // for removing todo item from container
  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  //for marking todo as complete

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = true;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <TodoForms addTodo={addTodo}></TodoForms>
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      ></Todo>
    </div>
  );
}
