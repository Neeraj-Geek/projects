import React, { useState } from "react";

function AddTaskForm({ AddTask }) {
  const [taskName, setTaskName] = useState("");
  const [taskPriority, setTaskPriority] = useState("low");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      task: taskName,
      priority: taskPriority,
    };

    AddTask(newTask);
    setTaskName("");
    setTaskPriority("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new task..."
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
          required
        />

        <select
          value={taskPriority}
          onChange={(e) => {
            setTaskPriority(e.target.value);
          }}
          required
        >
          <option value="">Select Importance</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default AddTaskForm;
