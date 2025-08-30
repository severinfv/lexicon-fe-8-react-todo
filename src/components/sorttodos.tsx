import type { ReactElement } from "react";
import type { ITakeTodoList, Sorting } from "../types";


export const SortTodosBtns = ({ todolist }: ITakeTodoList): ReactElement => {

  const handleSortClick = (field: Sorting) => () => {
  todolist.actions.sort(field);
};

  return (
   <div className="sort-todos">
        <button type="button" onClick={handleSortClick("author")}>Sort Author</button>
        <button type="button" onClick={handleSortClick("created")}>Sort Created</button>
        <button type="button" onClick={handleSortClick("due")}>Sort Due</button>
    </div>
  );
};