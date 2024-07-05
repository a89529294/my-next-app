async function getTodos() {
  await new Promise((r) => setTimeout(r, 2000));
  return fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
    res.json(),
  );
}

export default async function Home() {
  const todos = await getTodos();
  return (
    <>
      <h1>Todos</h1>
      <p>{todos.length}</p>
    </>
  );
}
