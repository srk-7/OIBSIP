import React, { useState } from "react";

export default function TodoForms(props) {
  const [input, setinput] = useState("");
  const [desc, setDesc] = useState("");
  //for changes to be reflected in the input field..
  const handleChange = (e) => {
    setinput(e.target.value);
  };
  const handleChang = (e) => {
    setDesc(e.target.value);
  };
  //on submit it will call the props addtodo function in todoform..asdf
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo({
      id: Math.floor(Math.random() * 10000), //for random id
      text: input + "  => [" + desc+"]",
      isComplete: false,
    });
    setinput("");
    setDesc("");
  };
  return (
    <form className="todo-form">
      <input
        type="text"
        placeholder="Enter the Task"
        onChange={handleChange}
        className="todo-input"
        value={input}
        name="text"
      />

      <input
        type="text"
        placeholder="Description of Task"
        onChange={handleChang}
        className="todo-input"
        value={desc}
        name="text"
      />

      <button type="submit" className="todo-btn" onClick={handleSubmit}>
        Add todo
      </button>
    </form>
  );
}
