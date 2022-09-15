import React from "react";
import ToDoListChecked from "./component/ToDoList";
import ToDoListUnChecked from "./component/ToDoListUnchecked";

function ToDoPage({todos}) {
    return (
        <div className="todo-page">
            <div>
            <h4>To Do Checked</h4>
             {todos.map((todo) => {
                if (todo.completed !== false) {
                    return <ul><li><ToDoListChecked key={todo.id} todo={todo} /></li></ul>
                }
            })}
            </div>
            <div>
            <h4>To Do Unchecked</h4>
             {todos.map((todo) => {
                if (todo.completed === false) {
                    return <ul><li><ToDoListUnChecked key={todo.id} todo={todo} /></li></ul>
                }
            })}
            </div>
        </div>    
    )
}
export default ToDoPage