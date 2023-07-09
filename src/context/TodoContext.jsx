import React, { useCallback, useMemo, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import { TodoItem } from "../components";
const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [searchTodo, setSearchTodo] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const handleTodoComplete = useCallback(
    (todoId) => {
      saveTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === todoId ? { ...todo, completed: true } : todo
        )
      );
    },
    [saveTodos]
  );
  const handleTodoDelete = useCallback(
    (todoId) => {
      saveTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
    },
    [saveTodos]
  );
  const filteredTodos = useMemo(
    () =>
      todos.filter((todo) =>
        todo.text.toLowerCase().includes(searchTodo.toLowerCase())
      ),
    [todos, searchTodo]
  );
  const ultimoObjeto = todos[todos.length - 1] || 0
  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      text,
      completed: false,
      id: ultimoObjeto.id + 1 || 1
    })
    saveTodos(newTodos)
    setOpenModal(false)
  }

  const completedTodos = useMemo(() => {
    return todos.filter((todo) => todo.completed).length;
  }, [todos]);

  const todoListItems = useMemo(() => {
    function renderTodoItem(todo) {
      return (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => handleTodoComplete(todo.id)}
          onDelete={() => handleTodoDelete(todo.id)}
        />
      );
    }
    return filteredTodos.map(renderTodoItem);
  }, [filteredTodos, handleTodoComplete, handleTodoDelete]);
  return (
    <TodoContext.Provider
      value={{
        completedTodos,
        todos,
        searchTodo,
        setSearchTodo,
        todoListItems,
        onComplete: handleTodoComplete,
        onDelete: handleTodoDelete,
        openModal,
        setOpenModal,
        addTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
