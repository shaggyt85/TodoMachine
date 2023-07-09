import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import "./TodoCounter.css"

const TodoCounter = () => {
  const { completedTodos, todos } = useContext(TodoContext);
  const total = todos.length;
  return (
    <>
      <h2 className="TodoCounter">
        Has completado <span>{completedTodos}</span> de <span>{total}</span>
      </h2>
      {completedTodos === total && (
        <p className="TodoCounter">Felicitaciones, has completado todas las tareas eres lo maximo</p>
      )}
    </>
  );
};

export default TodoCounter;
