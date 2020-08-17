import { v4 as uuidv4 } from "uuid";

export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      if (!action.payload) {
        return state;
      }

      if (state.todos.findIndex((t) => t.text === action.payload) > -1) {
        return state;
      }

      const newTodo = {
        id: uuidv4(),
        text: action.payload,
        complete: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    case "SET_CURRENT_TODO":
      return { ...state, currentTodo: action.payload };
    case "UPDATE_TODO":
      const updatedTodo = { ...state.currentTodom, text: action.payload };
      const index = state.todos.findIndex((t) => t.id === state.currentTodo.id);

      if (!action.payload) {
        return state;
      }

      if (state.todos.findIndex((t) => t.text === action.payload) > -1) {
        return state;
      }

      return {
        ...state,
        currentTodo: {},
        todos: [
          ...state.todos.slice(0, index),
          updatedTodo,
          ...state.todos.slice(index + 1),
        ],
      };
    case "TOGGLE_TODO":
      const toggleTodos = state.todos.map((t) =>
        t.id === action.payload.id
          ? { ...action.payload, complete: !action.payload.complete }
          : t
      );
      return {
        ...state,
        todos: toggleTodos,
      };
    case "REMOVE_TODO":
      const isRemovedTodo =
        state.currentTodo.id === action.payload.id ? {} : state.currentToDo;
      return {
        ...state,
        currentTodo: isRemovedTodo,
        todos: state.todos.filter((t) => t.id !== action.payload.id),
      };
    default:
      return state;
  }
}
