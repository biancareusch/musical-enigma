import React from 'react'
import Todo from './Todo'

//passing toggleTo do function to the To do component
export default function TodoList({todos, toggleTodo}) {
    return (
        //list all todos
        todos.map(todo => {
            //each to do has unique key
            return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo}/>
        })
    )
}