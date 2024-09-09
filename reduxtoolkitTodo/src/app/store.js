// 1. Import configure store from redux
import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice.js'

export const store = configureStore({
    reducer: todoReducer
})