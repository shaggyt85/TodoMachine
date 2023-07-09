import React from 'react'
import {BsTrash, BsCheck2} from 'react-icons/bs'
import {RxCross2} from 'react-icons/rx'
import "./TodoItem.css"

const TodoItem = ({text, completed, id, onDelete, onComplete }) => {
  return (
    
    <li className='TodoItem'>
    <span className="TodoItem-p"onClick={onComplete}>{!completed ? <RxCross2/> : <BsCheck2 /> }</span>
    <p ><span>{id}</span> {text}</p>
    <p><span onClick={onDelete}><BsTrash /></span></p>
  </li>

  )
}

export default TodoItem