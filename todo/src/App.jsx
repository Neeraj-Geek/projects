import { useState } from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [taskListArr, setTaskListArr] = useState([]);
  const AddTaskfn = (newTask) => {
    setTaskListArr([newTask, ...taskListArr]);
  };
  const deleteTaskfn = (taskId) => {
    const filtered = taskListArr.filter((task) => task.id !== taskId);
    setTaskListArr(filtered);
  };
  const [filterPriority, setFilterPriority] = useState("All");
  console.log("filterPriority :>> ", filterPriority);
  const filteredTaskListArr =
    filterPriority === "All"
      ? taskListArr
      : taskListArr.filter((exp) => exp.priority === filterPriority);
  return (
    <>
      <div className="container">
        <h1>To-Do List</h1>

        <AddTaskForm AddTask={AddTaskfn} />

        <div className="filter-section">
          <label>Filter by importance:</label>
          <select
            value={filterPriority}
            onChange={(e) => {
              setFilterPriority(e.target.value);
            }}
            id="filter"
          >
            <option value="All">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <h3>Task List</h3>
        <ul>
          <TaskList tasks={filteredTaskListArr} deleteTask={deleteTaskfn} />
        </ul>
      </div>
    </>
  );
}

export default App;
