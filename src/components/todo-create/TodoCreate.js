import { useState } from "react";
import "./TodoCreate.css";

const TodoCreate = (props) => {
  const HandleSubmit = (event) => {
    event.preventDefault(); // mencegah refresh page, default dari button submit
    const newTodo = {
      id: Math.floor(Math.random() * 100 + 1),
      title: getInputTodo,
    };
    props.onCreateTodo(newTodo);
    setInputTodo("");
  };

  const [getInputTodo, setInputTodo] = useState("");

  const handleInputTodo = (event) => {
    setInputTodo(event.target.value);
  };

  return (
    <form action="" className="todo-form" onSubmit={HandleSubmit}>
      <input type="text" value={getInputTodo} onChange={handleInputTodo} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoCreate;
