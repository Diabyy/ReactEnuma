import { useState } from "react";

export default function TodoForm({ onAddTask }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onAddTask(inputValue);
    setInputValue("");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tambah Makanan"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Tambah</button>
      </form>
    </div>
  );
}
