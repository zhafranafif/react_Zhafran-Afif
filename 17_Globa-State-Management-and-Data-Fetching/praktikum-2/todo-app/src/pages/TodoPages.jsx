/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import FormPage from "../component/FormPage";
import TodoNavbar from "../component/navbar/TodoNavbar";
import { useSelector, useDispatch } from 'react-redux'
import { createAllTodo, deleteTodoList, fetchAllTodo} from "../store/todoSlice";
import { useEffect } from "react";
import TodoItem from "../component/TodoItem";

const TodoPages = () => {
  const tasks = useSelector((state) => state.todo.data)
  const dispatch = useDispatch()
  console.log(tasks)

  useEffect(() => {
    dispatch(fetchAllTodo())
  }, [dispatch])  

  
  return (
    <>
    <TodoNavbar /> 
      <div className="todoapp stack-large">
        <h1>To Do App</h1>
        <div className='main-container'>
            
          <div>
            <FormPage addTask={() => dispatch(createAllTodo)} />
          </div>
            
          <div>
            <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
            {tasks.map((task) => <TodoItem key={task.id} id={task.id} tittle={task.tittle} completed={task.completed} onDelete={() => dispatch(deleteTodoList(task.id))} />)}
            </ul>
          </div>
        </div>
      </div>
      </>
    );
}
export default TodoPages