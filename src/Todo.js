import React from 'react'

export default function ({ todo,toggleTodo }) {

    function handleTodoClick(){
        toggleTodo(todo.id)
    }

    return (
        <div>
            <label>
            <input type="checkbox" defaultChecked={todo.complete} onChange={handleTodoClick}></input>
            {todo.name}

            </label>
        </div>
    )
}
