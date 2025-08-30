import { useList } from "../helpers/useList";
import type { ITodo } from "../types";
import { ToDoMenu } from "./todo-collection-menu";
import TodoCollection  from "./todo-collection";

export const App = () => {
  const todos = useList<ITodo>("todos", []);
  const completed = useList<ITodo>("completed", []);

  return (
    <>
    <ToDoMenu todolist={todos}/>
    <TodoCollection  todolist={todos} completed={completed}/>
    </>
  );
};

export default App;
