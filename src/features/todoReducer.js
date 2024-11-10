import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('todo')) || [];

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const updatedState = [...state, action.payload];
            localStorage.setItem('todo', JSON.stringify(updatedState));
            return updatedState;
        },
        deleteTodo: (state, action) => {
            // Assuming action.payload contains the id of the todo to be deleted
            const updatedState = state.filter(todo => todo.id !== action.payload);
            localStorage.setItem('todo', JSON.stringify(updatedState));
            return updatedState;
        },
        updateTodo: (state, action) => {

            // Assuming action.payload contains an object with `id` and `updatedData`
            const { id, updatedData } = action.payload;
            const updatedState = state.map(todo =>
                todo.id === id ? { id,text:updatedData } : todo
            );
            localStorage.setItem('todo', JSON.stringify(updatedState));
            return updatedState;
        }
    }
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
