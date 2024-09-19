import React, { useState } from "react";

export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo } = props;
  const [completed, setCompleted] = useState(false);

  return (
    <div
      className={`todoItem ${completed ? "completed" : ""}`}
      onClick={() => setCompleted(!completed)}
    >
      <span className="dragHandle">☰</span>
      {children}
      <div className="actionContainer">
        <button
          className="actionButton"
          onClick={(e) => {
            e.stopPropagation();
            handleEditTodo(index);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          className="actionButton"
          onClick={(e) => {
            e.stopPropagation();
            handleDeleteTodo(index);
          }}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
}
