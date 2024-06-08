import React from 'react'
import './Todo.css'
import { FaTrashCan } from 'react-icons/fa6'



const Todo = ({ todoItem, deleteTodo, checkTodo }) => {

    const deleteTodoHandler = (id) => {
        deleteTodo(id);
    }

    const inputChangeHandler = (id) => {
        checkTodo(id);
    }

    return (
        <li className={`${todoItem.checked ? 'todo checked' : 'todo'}`}>
            <p>
                <input onChange={() => inputChangeHandler(todoItem.id)} className='check' type="checkbox" defaultChecked={todoItem.checked} />
                {todoItem.todo}
                <span onClick={() => deleteTodoHandler(todoItem.id)} ><FaTrashCan /></span>
            </p>
        </li>
    )
}

export default Todo