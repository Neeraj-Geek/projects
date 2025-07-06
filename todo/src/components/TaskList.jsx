import React from "react";

function TaskList() {
  return (
    <>
      <li>
        Buy groceries — <strong>Medium</strong>
        <button class="delete-btn">Delete</button>
      </li>
      <li>
        Finish React assignment — <strong>High</strong>
        <button class="delete-btn">Delete</button>
      </li>
      <li>
        Call Mom — <strong>Low</strong>
        <button class="delete-btn">Delete</button>
      </li>
    </>
  );
}

export default TaskList;
