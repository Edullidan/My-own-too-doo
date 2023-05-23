import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    const togComplete = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
    setTodos(togComplete);
  };

  const editTodo = (id) => {
    const edTodo = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isEditing: !todo.isEditing,
        };
      } else {
        return todo;
      }
    });
    setTodos(edTodo);
  };

  const editTask = (task, id) => {
    const edTask = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          task: task,
          isEditing: !todo.isEditing,
        };
      } else {
        return todo;
      }
    });
    setTodos(edTask);
  };

  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done !</h1>
      <TodoForm addTodo={addTodo} />
      {}
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};
