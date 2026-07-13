import { useState } from "react";

export default function TodoItem({ task, onDeleteTask, onUpdateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task?.description || "");

  const handleSave = () => {
    const nextValue = editValue.trim();
    if (!nextValue) return;
    onUpdateTask(task.id, nextValue);
    setIsEditing(false);
  };

  return (
    <div
      className="tugas"
      style={{ display: "flex", gap: "2px", alignItems: "center", marginBottom: "5px" }}
    >
      <input type="checkbox" />
      {isEditing ? (
        <input
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
      ) : (
        <h4>{task?.description || "Tugas"}</h4>
      )}
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </div>
  );
}
