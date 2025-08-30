import {
  type ReactElement,
} from "react";
import type { ITakeTodoList } from "../types";
import { Todo } from "./todoitem";


export const ToDoList = ({ todolist, archive }: ITakeTodoList): ReactElement => {


  return (
    <>
      <section className="todo-list">
        {todolist.list.length === 0 ? (
          <p>Well done...</p>
        ) : (
          todolist.list.map((todo) => (
            <Todo
              key={todo.id}
              onMove={todolist.actions.move}
              onRemove={todolist.actions.remove}
              onArchive={() => {
                todolist.actions.remove(todo);
                archive!.actions.add(todo);
              }}
              todo={todo}
            />
          ))
        )}
      </section>
    </>
  );
};

export default ToDoList;
