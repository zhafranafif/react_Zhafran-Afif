import { createSlice } from "@reduxjs/toolkit";

const initialValue = [
        {
          id: 1,
          tittle: "Mengerjakan Exercise",
          completed: true
        },
        {
          id: 2,
          tittle: "Mengerjakan Assignment",
          completed: true
        },
        {
          id: 3,
          tittle: "Mengerjakan Summary",
          completed: false
        }
]

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos : initialValue
    },
    reducers: {
      onAddHandler: (state, action) => {
            const newTasks = {
                id: +new Date(),
                tittle: action.payload,
                completed : false
               }
               state.todos = [...state.todos, newTasks]
        },
      onDeleteHandler: (state, action) => {
            state.todos = state.todos.filter((todo) => {
                return todo.id !== action.payload
            })
        },
    }
})

export const { onAddHandler, onDeleteHandler } = todoSlice.actions
export default todoSlice.reducer