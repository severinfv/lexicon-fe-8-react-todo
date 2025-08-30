import {
  useRef,
  useState,
  type ReactElement
} from "react";

import type { TodoListProps , ITodo } from "../types";
import { v4 as uuidv4 } from "uuid";



export const AddTodoForm = ({ todolist, onAdded }: TodoListProps ): ReactElement => {

  const [dueDate, setDueDate] = useState(new Date().toISOString().split("T")[0]);


  const inputRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

const handleSubmit = (e?: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLSpanElement>) => {
  e?.preventDefault(); 

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
  dateRef.current!.value = new Date().toISOString().split("T")[0]; 

  if (onAdded) onAdded();
};

  return (
    <form className="new-todo-form" onSubmit={handleSubmit}>
      <div>
        <input ref={inputRef} type="text" placeholder="Task Name" required/>
        <input ref={authorRef} type="text" placeholder="@" required/>
        <input
          ref={dateRef}
          type="date"
          value={dueDate}
          min="2025-08-29"
          max="2027-08-29"
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
        <span
          className="material-symbols-outlined add-btn"
          onClick={handleSubmit}
        >
          forms_add_on
        </span>
      </div>
    </form>
  );
};
