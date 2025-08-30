import {
  useEffect,
} from "react";
import { useList } from "../helpers/useList";
import type { ITodo } from "../types";
import { NewTodoForm } from "./addtodo";
import { SortTodosBtns } from "./sorttodos";
import ToDoList from "./todolist";

export const App = () => {
  const todos = useList<ITodo>("todos", []);
  const archive = useList<ITodo>("archive", []);

  useEffect(() => {
    console.log("App was rendered");
  });

  return (
    <>
    <NewTodoForm todolist={todos}/>
    <ToDoList todolist={todos} archive={archive}/>
    <SortTodosBtns todolist={todos}/>
    </>
  );
};

export default App;
