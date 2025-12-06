import React, { useState, useEffect } from "react";
import TaskList from "./TaskList.jsx";
import TaskForm from "./TaskForm.jsx";


function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    if (text.trim() === "") return;
    setTasks([...tasks, text]);
  };

  const removeTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div style={{ fontFamily: "Arial", textAlign: "center", padding: "20px" }}>
      <h1>Список задач</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onRemove={removeTask} />
    </div>
  );
}

export default App;
