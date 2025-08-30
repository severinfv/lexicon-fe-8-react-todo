import { useState } from "react";
import type { ITodoControlsProps } from "../types";

export const TodoItemControls = ({
  isEditing,
  setIsEditing,
  onSave,
  onRemove,
  onMoveUp,
  onMoveDown,
  onCompleted,
}: ITodoControlsProps) => {

  const [hovered, setHovered] = useState(false);
  
  return (
    <div className="todoControls">
      {isEditing ? (
        <>
          <span className="material-symbols-outlined edit-btn" onClick={onSave}>
            Save
          </span>
          <span
            className="material-symbols-outlined edit-btn"
            onClick={() => setIsEditing(false)}
          >
            Undo
          </span>
          <span
            className="material-symbols-outlined delete-btn"
            onClick={onRemove}
          >
            delete_forever
          </span>
        </>
      ) : (
        <>
          <span
            className="material-symbols-outlined complete-btn"
            onClick={onCompleted}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {hovered ? "check_circle" : "radio_button_unchecked"}
            
          </span>
          <span
            className="material-symbols-outlined move-up"
            onClick={onMoveUp}
          >
            stat_1
          </span>
          <span
            className="material-symbols-outlined move-down"
            onClick={onMoveDown}
          >
            stat_minus_1
          </span>

          <span
            className="material-symbols-outlined edit-btn"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </span>
        </>
      )}
    </div>
  );
};
