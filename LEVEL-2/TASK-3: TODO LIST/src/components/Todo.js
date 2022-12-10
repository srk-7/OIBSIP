import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

export default function Todo({ todos, completeTodo, removeTodo }) {
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "complete-todo-div" : "todo-div"}
      key={index}
    >
      <div className={todo.isComplete ? "complete" : "todo-text"}>
        {todo.text}
      </div>
      <div className="todo-icon" key={todo.id}>
        <TiTick
          className={todo.isComplete ? "nothing" : "tick"}
          onClick={() => {
            completeTodo(todo.id);
          }}
        ></TiTick>
        {/* for tick button ^*/}

        {/* for cross button */}
        <RiCloseCircleLine
          className="cross"
          onClick={() => {
            removeTodo(todo.id);
          }}
        ></RiCloseCircleLine>
      </div>
    </div>
  ));
}
