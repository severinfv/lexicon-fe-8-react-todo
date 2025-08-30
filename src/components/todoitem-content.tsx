import { formatDate } from "../helpers/convertDate";
import type { ITodoContentProps } from "../types";

export const TodoItemContent = ({ todo, isEditing, formValues, onChange }: ITodoContentProps) => {
  if (!isEditing) {

    const isOverdue = todo.due < new Date().setHours(0, 0, 0, 0);

    return (
      <div className="todoContent">
        <p className="task">{todo.content}</p>
        <span className="material-symbols-outlined icon"> alternate_email </span>
        <p className="author">{todo.author}</p>
        <div className={`time-span ${isOverdue ? "overdue" : ""}`}>
        <p className="start_date">{formatDate(todo.created)}</p>
        <span className="material-symbols-outlined icon">arrow_right_alt </span>
        <p className="due_date">{formatDate(todo.due)}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="todoContent editing">
      <input
        type="text"
        value={formValues.content}
        onChange={(e) => onChange({ content: e.target.value })}
        placeholder="Task Name"
      />
      <input
        type="text"
        value={formValues.author}
        onChange={(e) => onChange({ author: e.target.value })}
        placeholder="@"
      />
      <input
        type="date"
        value={new Date(formValues.due).toISOString().split("T")[0]}
        onChange={(e) =>
          onChange({ due: e.target.valueAsNumber })
        }
      />
    </div>
  );
};
