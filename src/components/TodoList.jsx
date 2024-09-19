import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos, handleDeleteTodo, handleEditTodo, handleReorderTodos } = props;

  const onDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, dropIndex) => {
    e.preventDefault();
    const dragIndex = Number(e.dataTransfer.getData("text/plain"));
    handleReorderTodos(dragIndex, dropIndex);
  };

  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => (
        <li
          key={todoIndex}
          draggable
          onDragStart={(e) => onDragStart(e, todoIndex)}
          onDragOver={onDragOver}
          onDrop={(e) => onDrop(e, todoIndex)}
        >
          <TodoCard
            handleDeleteTodo={handleDeleteTodo}
            handleEditTodo={handleEditTodo}
            index={todoIndex}
          >
            <p>{todo}</p>
          </TodoCard>
        </li>
      ))}
    </ul>
  );
}
