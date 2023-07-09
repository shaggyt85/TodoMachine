import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import "./TodoSearch.css"

const TodoSearch = () => {
  const { searchTodo, setSearchTodo } = useContext(TodoContext);
  return (
    <>
      <input
        type="text"
        placeholder="Buscar"
        className="TodoSearch"
        value={searchTodo}
        onChange={(e) => setSearchTodo(e.target.value)}
      />
    </>
  );
};

export default TodoSearch;
