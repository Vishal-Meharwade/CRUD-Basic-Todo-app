import React, { useState, useRef } from "react";

export default function TodoInput(props) {
  const {
    handleNewTodos,
    handleUpdateTodo,
    todoValue,
    setTodoValue,
    isEditing,
  } = props;
  const [isShaking, setIsShaking] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = () => {
    if (todoValue.trim() !== "") {
      if (isEditing) {
        handleUpdateTodo();
      } else {
        handleNewTodos(todoValue);
      }
      setTodoValue("");
    } else {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 820);
    }
  };

  return (
    <header>
      <h1 className="header-title">Todo List</h1>
      <input
        ref={inputRef}
        className={isShaking ? "shake" : ""}
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter todo..."
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />
      <button onClick={handleSubmit}>{isEditing ? "Update" : "Add"}</button>
    </header>
  );
}
