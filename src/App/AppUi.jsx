import React, { useContext } from "react";
import {
  TodoCounter,
  TodoSearch,
  TodoList,
  TodoCreateButton,
  TodoForm
} from "../components";
import { TodoContext } from "../context/TodoContext";
import Modal from "../Modal";

const AppUi = () => {
  const { todoListItems, openModal, setOpenModal } = useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>{todoListItems}</TodoList>
      <TodoCreateButton setOpenModal={setOpenModal} />
      {openModal && (<Modal><TodoForm /></Modal>)}
      
    </>
  );
};

export default AppUi;
