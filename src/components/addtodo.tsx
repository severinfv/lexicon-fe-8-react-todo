import type { ReactElement } from "react";
import {
  useRef,
  type FormEventHandler,
} from "react";

import type { ITakeTodoList, ITodo } from "../types";
import { v4 as uuidv4 } from "uuid";



export const NewTodoForm = ({ todolist }: ITakeTodoList): ReactElement => {


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
    todolist.actions.add(newTodo);
    inputRef.current!.value = "";
    authorRef.current!.value = "";
    dateRef.current!.value = "";
  };

  return (
    <form className="new-todo-form" onSubmit={handleOnSubmit}>
        <div>
          <input ref={inputRef} type="text" placeholder="Task Name" />
          <input ref={authorRef} type="text" placeholder="@" />
          <input ref={dateRef} type="date" min="2025-08-29" max="2027-08-29" />
          <button type="submit">Save</button>
        </div>
      </form>
  );
};
