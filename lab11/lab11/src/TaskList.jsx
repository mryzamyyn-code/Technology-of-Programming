import React from "react";

function TaskList({ tasks, onRemove }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task, index) => (
        <li key={index} style={{ margin: "10px 0" }}>
          {task}
          <button
            onClick={() => onRemove(index)}
            style={{
              marginLeft: "10px",
              padding: "4px 8px",
              cursor: "pointer"
            }}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
