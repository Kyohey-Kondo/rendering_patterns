export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default eventHandler(async () => {
  const todos: Todo[] = await $fetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return todos;
});
