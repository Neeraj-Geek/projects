import React from "react";

function TaskList({ tasks, deleteTask }) {
  return (
    <>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            {task.task}
            <strong> {task.priority}</strong>
            <button onClick={() => deleteTask(task.id)} className="delete-btn">
              Delete
            </button>
          </li>
        );
      })}
    </>
  );
}

export default TaskList;
