import React, { useState } from 'react'
import TodoList from './TodoList'
import './TodoApp.css'
import Form from './Form'

const TodoApp = () => {

    const DUMMY_TODOS = [
        {
            id: 0,
            todo: 'Go to Gym'
        },
        {
            id: 1,
            todo: 'Learn React'
        },
        {
            id: 2,
            todo: 'Buy Groceries'
        },
        {
            id: 3,
            todo: 'Learn DSA'
        }
    ]

    const [todos, setTodos] = useState(DUMMY_TODOS);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    }

    return (
        <div className='todoApp'>
            <h1 style={{ textAlign: 'center' }}>Todo App</h1>
            <Form addTodo={addTodo} todos={todos} />
            <TodoList todos={todos} />
        </div>
    )
}

export default TodoApp