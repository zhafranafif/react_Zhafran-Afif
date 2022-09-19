import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      tittle: '',
    }
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
    this.onTodoChangeHandler = this.onTodoChangeHandler.bind(this)
    this.SubmitHandler = this.SubmitHandler.bind(this)
  }
  SubmitHandler() {
    this.setState(() => {
      if (this.state.tittle === '') {
        alert('Test')
        return
      } else {
        return 
      }
    })
  }

  onSubmitHandler(event) {
    event.preventDefault()
    this.props.addTodo(this.state)
  }
  onTodoChangeHandler(event) {
    this.setState(() => {
      return {
        tittle: event.target.value.length <= 75 ? event.target.value : this.state.tittle.slice(0,75)
      }
    })
  }

  render() {
    const char = 75
    return (
      <>
        <form onSubmit={this.onSubmitHandler}>
          <div className="input-container">
          <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            placeholder="Add Todo..."
            value={this.state.tittle}
            onChange={this.onTodoChangeHandler}
          />
          <button type="submit" className="btn btn__primary btn__lg" onClick={() => {this.SubmitHandler()}}>
            Submit
            </button>
          <p className="todo-input__title__char-limit">Sisa Karakter : {char - this.state.tittle.length}</p>
          </div>
        </form>
      </>
    )
  }
}
export default Form