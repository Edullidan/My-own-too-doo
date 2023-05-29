import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  const todoTodo = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#4b033b",
    color: "#fff",
    padding: "0.75rem 1rem",
    borderRadius: "5px",
    marginBottom: "1rem",
    cursor: "pointer",
  };

  const faTras = {
    marginLeft: "0.75rem",
  };

  return (
    <div className='Todo' style={todoTodo}>
      <p
        className={`${task.completed ? "completed" : ""}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          style={faTras}
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
