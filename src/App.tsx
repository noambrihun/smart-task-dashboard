import "./index.css";
import { useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build Dashboard", completed: false },
  ]);
  return (
    <div className="bg-gray-800 flex flex-row items-center justify-center min-h-screen text-white gap-4">
      <Header />
      <AddTask />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;