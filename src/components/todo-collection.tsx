import {type ReactElement} from "react";
import type { Direction, ITodo, TodoListProps  } from "../types";
import { TodoItem } from "./todo-item";


export const TodoCollection  = ({ todolist, completed }: TodoListProps ): ReactElement => {

    const handleUpdate = (todo: ITodo) => todolist.actions.update(todo);
    const handleRemove = (todo: ITodo) => todolist.actions.remove(todo);
    const handleMove = (todo: ITodo, direction: Direction) => todolist.actions.move(todo, direction);
    const handleComplete = (todo: ITodo) => {handleRemove(todo); completed!.actions.add(todo); 
  };


  return (
    <>
      <section className="todo-list">
        {todolist.list.length === 0 ? (
          <p>Well done...</p>
        ) : (
          todolist.list.map((todo) => (
            <TodoItem
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdate}
            onRemove={handleRemove}
            onMove={handleMove}
            onCompleted={handleComplete}
          />
          ))
        )}
      </section>
    </>
  );
};

export default TodoCollection ;
