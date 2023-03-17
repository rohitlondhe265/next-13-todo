import SingleTodo from "@/app/components/SingleTodo"
import { notFound } from 'next/navigation'

export const dynamicParams = true;

// fetch todos from api
async function fetchTodos(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    next: { revalidate: 30 }
  });
  const todo = await res.json();
  return todo;
}

// dynamic meta data
export async function generateMetadata({ params: { id } }) {
  const post = await fetchTodos(id);
  return {
    title: post.title,
  }
}

// page to render
export default async function ({ params: { id } }) {
  const todo = await fetchTodos(id);

  if (!todo.id) {
    return notFound();
  }
  
  return (
    <div className="pt-12">
      <SingleTodo todo={todo} />
    </div>
  )
}

// generate static paths
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