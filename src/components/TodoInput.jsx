import React, { useState } from "react";

export default function TodoInput(props) {
  const { handleNewTodos, todoValue, setTodoValue} = props;

  // const [todoValue, setTodoValue] = useState("");

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter todo..."
      />
      <button
        onClick={() => {
          handleNewTodos(todoValue);
          setTodoValue('')
        }}
      >
        Add
      </button>
    </header>
  );
}
