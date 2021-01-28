import React from 'react'

//passing the toggleTo do function to the label
export default function Todo({todo, toggleTodo}) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }

    return (
        //creating the to do elements to be rendered
        <div>
            <label>
                <input type="checkbox" checked={todo.complete}
                       onChange={handleTodoClick}/>
                {todo.name}
            </label>
        </div>
    )
}