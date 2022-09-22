/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import getInitialData from "../utils/getInitialData";
import { useState } from "react";
import FormPage from "../component/FormPage";
import TodoPage from "../component/TodoPage";
import TodoNavbar from "../component/navbar/TodoNavbar";

const TodoPages = (props) => {
    const [tasks, setTasks] = useState(getInitialData)
  
    const onDeleteHandler = (id) => {
      setTasks((todo) => todo.filter(task => {
        return task.id !== id
      }))
    }
    const onAddHandler = (tittle) => {
      const newTasks = {
        id: +new Date(),
        tittle,
        completed : false
       }
       setTasks((tasks) => [...tasks, newTasks])
    }
    const toggleTaskCompleted = (id) => {
      const updatedTasks = tasks.map((task) => {
        if (id === task.id) {
          return{...task, completed: !task.completed}
        }
        return task
      })
      setTasks(updatedTasks)
    }
  
  return (
    <>
    <TodoNavbar /> 
      <div className="todoapp stack-large">
        <h1>To Do App</h1>
        <div className='main-container'>
            
          <div>
            <FormPage addTask={onAddHandler} />
          </div>
            
          <div>
            <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
              {tasks.map((task) => <TodoPage key={task.id} id={task.id} tittle={task.tittle} completed={task.completed} onDelete={onDeleteHandler} toggleTaskCompleted={toggleTaskCompleted} />)}
            </ul>
          </div>
        </div>
      </div>
      </>
    );
}
export default TodoPages