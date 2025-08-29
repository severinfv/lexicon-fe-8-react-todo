import type { ReactElement } from "react";
import type { Direction, ITodo } from "../types";

interface ITodoProps {
  onMove: (todo: ITodo, direction: Direction) => void;
  onRemove: (todo: ITodo) => void;
  onArchive: (todo: ITodo) => void;
  todo: ITodo;
}

export const Todo = ({ onMove, onRemove, onArchive, todo }: ITodoProps): ReactElement => {
  return (
    <article className="todo">
      <span
        className="material-symbols-outlined"
        onClick={() => onRemove(todo)}
      >
        radio_button_unchecked
      </span>

      <p>{todo.content}</p>

      <span
        className="material-symbols-outlined move-up"
        onClick={() => onMove(todo, "UP")}
      >
        stat_1
      </span>
      <span
        className="material-symbols-outlined move-down"
        onClick={() => onMove(todo, "DOWN")}
      >
        stat_minus_1
      </span>

      <span
        className="material-symbols-outlined delete"
        onClick={() => onArchive(todo)}
      >
        archive
      </span>
    </article>
  );
};
