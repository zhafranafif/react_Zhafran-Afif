import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { onAddHandler } from "../store/todoSlice";

const char = 75

function FormPage() {
  const dispatch = useDispatch()
  const [tittle, setTittle] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault()
    const formIsEmpty = tittle.length === 0
    if (formIsEmpty) {
      alert('Anda harus memasukkan Todo terlebih dahulu!')
    } else {
      dispatch(onAddHandler(tittle))
      setTittle('')
    }
  }
  const onTodoChangeHandler = (event) => {
    setTittle(event.target.value)
  }
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div className="input-container">
          <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            placeholder="Add Todo..."
            value={tittle}
            onChange={onTodoChangeHandler}
          />
          <button type="submit" className="btn btn__primary btn__lg">
            Submit
          </button>
          <p className="todo-input__title__char-limit">Sisa Karakter :{tittle.length <= 75 ? char - tittle.length : alert(`Your word is out of range`)}</p>
        </div>
      </form>
    </>
  )
}
export default FormPage