import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: { todolist: [] },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        name: action.payload.todo,
        status: false,
      };
      state.todolist.push(newTodo);
    },
    deleteTodo: (state, action) => {
      return state.todolist.filter((item) => item.id !== action.payload.id);
    },
    toggleTodo: (state, action) => {
        const todoPos = state.todolist.map(function(x) {return x.id; }).indexOf(action.payload.id);
        state.todolist[todoPos] = { ...state.todolist[todoPos], status: action.payload.status}
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
