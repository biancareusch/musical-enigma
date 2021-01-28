import React from 'react'
import Todo from './Todo'

export default function TodoList({todos}) {
    return (
        //list all todos
        todos.map(todo => {
            //each to do has unique key
            return <Todo key={todo.id} todo={todo}/>
        })
    )
}