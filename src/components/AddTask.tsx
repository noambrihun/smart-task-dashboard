import { useState } from "react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type Props = {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

function AddTask({ setTasks }: Props) {
  const [text, setText] = useState("");

  const handleAddTask = () => {
    if (text.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
    setText("");
  };

  return (
    <div className="bg-gray-800 flex flex-col min-h-screen items-center justify-center text-white gap-3">
      <h2 className="text-xl font-bold">Add Task</h2>

      <input
        className="text-black px-2 py-1 rounded"
        type="text"
        placeholder="Enter task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleAddTask}
        className="bg-blue-600 px-4 py-1 rounded"
      >
        Add
      </button>
    </div>
  );
}

export default AddTask;