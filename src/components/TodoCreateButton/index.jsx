import React from 'react'
import "./Buttom.css"

const TodoCreateButton = ({setOpenModal}) => {
  return (
    <button className='CreateTodoButton' onClick={() => setOpenModal(state => !state)}>+</button>
  )
}

export default TodoCreateButton