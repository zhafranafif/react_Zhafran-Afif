import React from "react";
function ToDoListChecked({todo}) {
    return (
        <> 
            <p className="todo-checked">{todo.title}</p>
        </>
    )
}
export default ToDoListChecked