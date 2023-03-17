
import Link from "next/link";

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();
  return todos;
}

const TodosList = async () => {
  const todos = await fetchTodos();
  return (
    <div>{
      todos.map((todo) => (
        <p>
          <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
      ))
    }</div>
  )
}

export default TodosList