import React from 'react'
import './Todo.css'


const Todo = (props) => {
    return (
        <li>
            <p>{props.todo}</p>
        </li>
    )
}

export default Todo