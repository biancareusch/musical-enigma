import React from 'react'

export default function Todo({todo}) {
    return (
        //creating the todo elements to be rendered
        <div>
            <label>
                <input type="checkbox" checked={todo.complete}/>
                {todo.name}
            </label>

        </div>
    )
}