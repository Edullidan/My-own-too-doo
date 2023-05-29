import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);
  };

  const buttonStyles = {
    outline: "none",
    background: "#4b033b",
    border: "1px solid #b63e1a",
    padding: " 0.5rem",
    marginTop: "0.5rem",
    marginBottom: "1rem",
    width: "100px",
    color: "#black",
  };

  return (
    <form onSubmit={handleSubmit} className='TodoForm'>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='todo-input'
        placeholder='Update task'
      />
      <button style={buttonStyles} type='submit' className='todo-btn'>
        Add Task
      </button>
    </form>
  );
};
