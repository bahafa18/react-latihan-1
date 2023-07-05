import "./Todo.css";
import TodoList from "../todoList/TodoList";
import TodoCreate from "../todo-create/TodoCreate";
import { useState } from "react";

const Todo = () => {
  const [getTodos, setTodos] = useState([
    { id: 1, title: "Dashboard" },
    { id: 2, title: "Laporan Keluhan" },
    { id: 3, title: "laporan Tindak Lanjut" },
    { id: 4, title: "Daftar User" },
  ]);
  const eventCreateTodo = (todo) => {
    setTodos(getTodos.concat(todo));
  };
  return (
    <>
      <h3>Daftar Menu</h3>
      <TodoCreate onCreateTodo={eventCreateTodo} />
      <TodoList data={getTodos} />
    </>
  );
};

export default Todo;
