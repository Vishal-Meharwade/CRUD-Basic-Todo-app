import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleEditTodo(index) {
    setTodoValue(todos[index]);
    setEditIndex(index);
  }

  function handleUpdateTodo() {
    if (editIndex !== null && todoValue.trim() !== "") {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = todoValue;
      setTodos(updatedTodos);
      setTodoValue("");
      setEditIndex(null);
      persistData(updatedTodos);
    }
  }

  function handleNewTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
    persistData(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodoList);
    persistData(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    setEditIndex(index); // This will set the index for the edit
  }

  function handleUpdateTodo() {
    if (editIndex !== null && todoValue.trim() !== "") {
      const updatedTodos = [...todos]; // Copy the current todos
      updatedTodos[editIndex] = todoValue; // Update the value at the editIndex
      setTodos(updatedTodos); // Update the state with the modified todos
      setTodoValue(""); // Clear the input
      setEditIndex(null); // Reset the editIndex
      persistData(updatedTodos); // Persist the updated todos to localStorage
    }
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }

    localTodos = JSON.parse(localTodos).todos;

    setTodos(localTodos);
  }, []);

  function handleReorderTodos(startIndex, endIndex) {
    const newTodos = Array.from(todos);
    const [reorderedItem] = newTodos.splice(startIndex, 1);
    newTodos.splice(endIndex, 0, reorderedItem);
    setTodos(newTodos);
    persistData(newTodos);
  }

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleNewTodos={handleNewTodos}
        handleUpdateTodo={handleUpdateTodo}
        isEditing={editIndex !== null}
      />
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleReorderTodos={handleReorderTodos}
        todos={todos}
      />
      <div className="credit">Project by Vishal</div>
    </>
  );
}

export default App;