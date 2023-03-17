import SingleTodo from "@/app/components/SingleTodo"
import { notFound } from 'next/navigation'

export const dynamicParams = true;

async function fetchTodos(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    next: { revalidate: 30 }
  });
  const todo = await res.json();
  return todo;
}

export default async function ({ params: { id } }) {
  const todo = await fetchTodos(id);

  if(!todo.id) {
    return notFound();
  }

  return (
    <div className="pt-12">
      <SingleTodo todo={todo} />
    </div>
  )
}

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const todos = await res.json();
  // return in form of [ { id: 1 }, { id: 2 } ]
  // to remove rate limit error
  const trimedTodos = todos.splice(0, 10);
  return trimedTodos.map((todo) => ({
    id: todo.id.toString(),
  }));
}