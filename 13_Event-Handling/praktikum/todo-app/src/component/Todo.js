import React from "react";

function Todo({onDelete, id, completed, tittle}) {
    return (
      <>
        <li className="todo stack-small">
          <div className="c-cb">
            <input className="c-cb__checked" id={id} type="checkbox" defaultChecked={completed} />
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
export default Todo