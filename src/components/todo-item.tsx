import { useState } from "react";
import type { IFormValues, ITodoItemProps } from "../types";
import { TodoItemContent } from "./todoitem-content";
import { TodoItemControls } from "./todoitem-controls";

export const TodoItem = ({ todo, onUpdate, onRemove, onMove, onCompleted }: ITodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formValues, setFormValues] = useState<IFormValues>({
    content: todo.content,
    author: todo.author,
    due: todo.due,
  });

  return (
    <article className="todoItem">
      <TodoItemContent
        todo={todo}
        isEditing={isEditing}
        formValues={formValues}
        onChange={(updated) => setFormValues(prev => ({ ...prev, ...updated }))}
      />
      <TodoItemControls
        todo={todo}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        onSave={() => { onUpdate({ ...todo, ...formValues }); setIsEditing(false); }}
        onRemove={() => onRemove(todo)}
        onMoveUp={() => onMove(todo, "UP")}
        onMoveDown={() => onMove(todo, "DOWN")}
        onCompleted={() => onCompleted(todo)}
      />
    </article>
  );
};