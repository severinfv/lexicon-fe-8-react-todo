import {
  useEffect,
  useRef,
  useState,
  type FormEventHandler,
  type MouseEventHandler,
} from "react";
import { useList } from "../useList";
import type { ITodo, Sorting } from "../types";
import { Todo } from "./todo";
import { v4 as uuidv4 } from "uuid";

export const App = () => {
  const todos = useList<ITodo>("todos", []);
  const archive = useList<ITodo>("archive", []);

  const inputRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const handleOnSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const newTodo: ITodo = {
      id: uuidv4(),
      created: Date.now(),
      due: dateRef.current!.valueAsNumber,
      author: authorRef.current!.value,
      content: inputRef.current!.value,
    };

    console.log("Submitted", newTodo);
    todos.actions.add(newTodo);
    inputRef.current!.value = "";
    authorRef.current!.value = "";
    dateRef.current!.value = "";
  };

  const handleSortClick = (field: Sorting) => () => {
  todos.actions.sort(field);
};

  useEffect(() => {
    console.log("App was rendered");
  });

  return (
    <>
      <form className="new-todo-form" onSubmit={handleOnSubmit}>
        <div>
          <input ref={inputRef} type="text" placeholder="Task Name" />
          <input ref={authorRef} type="text" placeholder="@" />
          <input ref={dateRef} type="date" min="2025-08-29" max="2027-08-29" />
          <button type="submit">Save</button>
        </div>
      </form>
      <div className="sort-todos">
        <button type="button" onClick={handleSortClick("author")}>Sort Author</button>
        <button type="button" onClick={handleSortClick("created")}>Sort Created</button>
        <button type="button" onClick={handleSortClick("due")}>Sort Due</button>
      </div>
      <section className="todo-list">
        {todos.list.length === 0 ? (
          <p>Well done...</p>
        ) : (
          todos.list.map((todo) => (
            <Todo
              key={todo.id}
              onMove={todos.actions.move}
              onRemove={todos.actions.remove}
              onArchive={() => {
                todos.actions.remove(todo);
                archive.actions.add(todo);
              }}
              todo={todo}
            />
          ))
        )}
      </section>
    </>
  );
};

export default App;
