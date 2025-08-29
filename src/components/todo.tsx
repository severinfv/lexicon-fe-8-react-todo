import type { ReactElement } from 'react';
import type { Direction, ITodo } from '../types';

interface ITodoProps {
  onMove: (todo: ITodo, direction: Direction) => void;
  onRemove: (todo: ITodo) => void;
  todo: ITodo;
}

export const Todo = ({ onMove, onRemove, todo }: ITodoProps): ReactElement => {
  return (
    <article className="todo">
      <p>{todo.content}</p>
      <div className="actions">
        <span className="material-symbols-outlined" onClick={() => onRemove(todo)}>
          delete
        </span>
        <span className="material-symbols-outlined move-up" onClick={() => onMove(todo, 'UP')}>
          arrow_circle_up
        </span>
        <span className="material-symbols-outlined move-down" onClick={() => onMove(todo, 'DOWN')}>
          arrow_circle_down
        </span>
      </div>
    </article>
  );
};