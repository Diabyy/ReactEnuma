import { useState, useEffect } from "react";

function useTasks() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem("tasks");
      if (!saved) return [];
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error("Gagal membaca localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const trimmedTask = task?.trim();
    if (!trimmedTask) return;

    const newTask = {
      id: new Date().getTime(),
      description: trimmedTask,
      status: "0",
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const updateTask = (id, newDescription) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, description: newDescription } : task,
      ),
    );
  };

  return {
    tasks,
    addTask,
    deleteTask,
    updateTask,
  };
}

export default useTasks;
