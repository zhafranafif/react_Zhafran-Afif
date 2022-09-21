/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import './App.css';
import Form from './component/Form';
import Todo from './component/Todo';
import getInitialData from './utils/getInitialData';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks : getInitialData()
    }
    this.onDeleteHandler = this.onDeleteHandler.bind(this)
    this.onAddHandler = this.onAddHandler.bind(this)
  }
  onDeleteHandler(id) {
    const tasks = this.state.tasks.filter((task) => task.id !== id)
    this.setState({tasks})

  }
  onAddHandler({tittle}) {
    this.setState((prevState) => {
      return {
        tasks: [
          ...prevState.tasks,
          {
            id: +new Date(),
            tittle,
            completed : false
          }
        ]
      }
    })
  }
  render() {
    return (
      <div className="todoapp stack-large">
        <h1>To Do App</h1>
        <div className='main-container'>
          
          <div>
            <Form addTodo={this.onAddHandler} />
          </div>
          
          <div>
        <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
          {this.state.tasks.map((task) => <Todo key={task.id} id={task.id} tittle={task.tittle} completed={task.completed} onDelete={this.onDeleteHandler} {...task} />)}
        </ul>
        </div>
        </div>
        </div>
    );
  }
}

export default App;
