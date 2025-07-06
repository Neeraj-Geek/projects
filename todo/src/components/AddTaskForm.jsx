import React from "react";

function AddTaskForm() {
  return (
    <>
      <form>
        <input type="text" placeholder="Enter a new task..." required />

        <select required>
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
