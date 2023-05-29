import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);

      setValue("");
    }
  };

  const formT = {
    width: "100%",
  };

  const todoI = {
    outline: "none",
    background: "#4b033b",
    border: "1px solid #b63e1a",
    padding: "0.5rem 1rem",
    marginTop: "1rem",
    marginBottom: "2rem",
    width: "300px",
    color: "#black",
    "::placeholder": {
      color: "red",
      fontStyle: "italic",
    },
  };

  const todoButton = {
    background: "#4b033b",
    color: "#fff",
    border: "none",
    padding: "0.55rem",
    cursor: "pointer",
  };
  return (
    <form style={formT} onSubmit={handleSubmit} className='TodoForm'>
      <input
        style={todoI}
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='todo-input'
        placeholder='What is the task today?'
      />
      <button style={todoButton} type='submit' className='todo-btn'>
        Add Task
      </button>
    </form>
  );
};
