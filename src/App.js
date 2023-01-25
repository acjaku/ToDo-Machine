import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
// import "./App.css";

const todos = [
  {
    text: "Terminar el curso",
    completed: false,
  },
  {
    text: "Tomar el siguiente curso",
    completed: false,
  },
  {
    text: "Ir al super",
    completed: false,
  },
  {
    text: "1 hora de ingles",
    completed: false,
  },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
