import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid'
import todoAPI from "../api/todos.api";

export const fetchAllTodo = createAsyncThunk('fetch/todo', async () => {
  try {
      const response = await todoAPI.getAllTodo()
      return response.data.todos_todos
  } catch (err) {
    console.log(err)
  }
})
export const createAllTodo = createAsyncThunk('post/todo', async (tittle) => {
  try {
    const response = await todoAPI.createTodo(tittle)
    return response.data.insert_todos_todos.returning[0]
  } catch (err) {
    console.log(err)
  }
})
export const deleteTodoList = createAsyncThunk('delete/todo', async (id) => {
  try {
    const response = await todoAPI.deletingTodo(id)
    return response.data.delete_todos_todos.returning[0]
  } catch (err) {
    console.log(err)
  }
})

const initialState = {
  data: [],
  status: "idle",
  error: null
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchAllTodo.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(fetchAllTodo.fulfilled, (state,action) => {
        state.status = "succeeded"
        state.data = action.payload
      })
      .addCase(fetchAllTodo.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
      .addCase(createAllTodo.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.data.push(action.payload)
      })
      .addCase(deleteTodoList.fulfilled, (state, action) => {
        state.data = state.data.filter((item) => item.id !== action.payload.id)
      })
    },
    reducers: {
      onAddHandler: (state, action) => {
            const newTasks = {
                id: uuidv4(),
                tittle: action.payload,
                completed : false
               }
               state.data = [...state.data, newTasks]
        },
      onDeleteHandler: (state, action) => {
            state.data = state.data.filter((todo) => {
                return todo.id !== action.payload
            })
        },
    }
})

export const { onAddHandler, onDeleteHandler } = todoSlice.actions
export default todoSlice.reducer