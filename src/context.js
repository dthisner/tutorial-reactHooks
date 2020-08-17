import React from "react";

const TodosContext = React.createContext({
  todos: [
    { id: 1, text: "Eat breakfast", complete: false },
    { id: 2, text: "Kiss Stacey", complete: false },
    { id: 3, text: "Finish Project X", complete: true },
  ],
  currentTodo: {},
});

export default TodosContext;
