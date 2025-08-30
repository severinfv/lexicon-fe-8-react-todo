import { useState, type ReactElement } from "react";
import type { SortOn, TodoListProps } from "../types";
import { AddTodoForm } from "./add-todo-form";


export const ToDoMenu = ({ todolist }: TodoListProps): ReactElement => {

  const [isAdding, setIsAdding] = useState(false);

  const handleSortClick = (field: SortOn) => () => {
  todolist.actions.sort(field);
};

  return (
    <>
  <div className="menu">
  <div className="new-todo">
      {isAdding ? (
          <AddTodoForm todolist={todolist} onAdded={() => setIsAdding(false)}/> ) : (
          <span className="material-symbols-outlined add-btn" title="Add New Task" onClick={() => setIsAdding(true)}>
            forms_add_on
          </span>
        )}
  </div>
   <div className="sort-todos">
    <span className="material-symbols-outlined sort_author" onClick={handleSortClick("author")}> article_person </span>
    <span className="material-symbols-outlined sort_author" onClick={handleSortClick("created")}> timer </span>
    <span className="material-symbols-outlined sort_author" onClick={handleSortClick("due")}> calendar_month </span>
    </div>
    </div>
    </>
  );
};


