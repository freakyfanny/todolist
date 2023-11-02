import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: "todos",
    initialState:[],
    reducers:{
        addTodo: (state, action)=>{
            const newTodo = {
                id: new nanoid(),
                name: action.payload.todo
            }
            state.push(newTodo);
        },
        deleteTodo: (state, action)=>{
            return state.filter((item) => item.id !== action.payload.id);
        }
    }
});

export const {addTodo, deleteTodo} = todosSlice.actions;

export default todosSlice.reducer;