import React from "react";

function TodoPage({ onDelete, id, completed, tittle, toggleTaskCompleted }) {
  if (completed) {
    return (
      <>
        <li className="todo stack-small">
          <div className="c-cb">
            <input className="c-cb__checked" id={id} type="checkbox" defaultChecked={completed} onChange={() => toggleTaskCompleted(id)} />
            <label className="todo-label" htmlFor={id} style={{textDecoration : "line-through"}}>
              {tittle}
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn__danger" onClick={() => onDelete(id)}>
              Delete
            </button>
          </div>
        </li>
      </>
    )
  }
  else {
    return (
      <>
        <li className="todo stack-small">
          <div className="c-cb">
            <input className="c-cb__checked" id={id} type="checkbox" defaultChecked={completed} onChange={() => toggleTaskCompleted(id)} />
            <label className="todo-label" htmlFor={id}>
              {tittle}
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn__danger" onClick={() => onDelete(id)}>
              Delete
            </button>
          </div>
        </li>
      </>
    )
  }
}
export default TodoPage