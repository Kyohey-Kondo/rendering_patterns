import { Todo } from "@/server/api/todos";

export default eventHandler(async (event) => {
  console.log(event.context);
  const todos: Todo[] = await $fetch(
    "https://jsonplaceholder.typicode.com/todos"
  );
  console.log(event.context.params);

  // const { data: todos } = await useFetch<Todo[]>(
  //   "https://jsonplaceholder.typicode.com/todos"
  // );
  // if (todos.value !== null) {
  //   const res = todos.value.find(
  //     (todo) => Number(event.context.params?.id) === todo.id
  //   );
  // }

  const res = todos.find(
    (todo) => Number(event.context.params?.id) === todo.id
  );
  return res;
});
