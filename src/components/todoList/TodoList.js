import "./TodoList.css";

const TodoList = (props) => {
  return (
    <ul className="todoList">
      {props.data.map((todo) => {
        return <li key={todo.id}>{todo.title}</li>;
      })}
    </ul>
  );
};

export default TodoList;
