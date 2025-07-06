import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <div class="container">
        <h1>To-Do List</h1>

        <AddTaskForm />

        <div class="filter-section">
          <label for="filter">Filter by importance:</label>
          <select id="filter">
            <option value="all">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <h3>Task List</h3>
        <ul>
          <TaskList />
        </ul>
      </div>
    </>
  );
}

export default App;
