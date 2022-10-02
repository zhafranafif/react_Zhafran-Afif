/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import './App.css';
import FormPage from './component/FormPage';
import TodoPage from './component/TodoPage';
import { useSelector, useDispatch } from 'react-redux';
import { onAddHandler, onDeleteHandler } from './store/todoSlice';
const App = () => {
  const tasks = useSelector((state) => state.todo.todos)
  const dispatch = useDispatch()
  return (
    <div className="todoapp stack-large">
      <h1>To Do App</h1>
      <div className='main-container'>
          
        <div>
          <FormPage addTask={() => dispatch(onAddHandler)} />
        </div>
          
        <div>
          <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
            {tasks.map((task) => <TodoPage key={task.id} id={task.id} tittle={task.tittle} completed={task.completed} onDelete={() => dispatch(onDeleteHandler(task.id))} />)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
