import './App.css';
import toDoData from './data';
import ToDoPage from './ToDoPage';
import ToDoHeader from './component/ToDoHeader';

function App() {
  return (
    <div>
      <div>
        <ToDoHeader text="To Do List" />
      </div>
      <div className='todo-page'>
        <ToDoPage todos={toDoData} />
      </div>
    </div>
  );
}

export default App;
