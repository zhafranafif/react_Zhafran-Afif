import React from "react";
function ToDoListUnChecked({todo}) {
    return (
        <>
            <p className="todo-unchecked">{todo.title}</p>
        </>
    )
}
export default ToDoListUnChecked