import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello",
      priority: "Low",
      complete: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        priority: "Low",
        complete: false,
      };
      state.todos.push(todo);
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    },
    updatePriority: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, priority: action.payload.priority }
          : todo
      );
    },
    updateCompleteStatus: (state, action) => {
      state.todos.map((todo) => {
        return todo.id === action.payload
          ? (todo.complete = !todo.complete)
          : todo;
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const {
  addTodo,
  updateTodo,
  updatePriority,
  updateCompleteStatus,
  removeTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
