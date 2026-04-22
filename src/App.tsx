import "./index.css";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="bg-gray-800 flex flex-row items-center justify-center min-h-screen text-white gap-4">
      <Header />
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;