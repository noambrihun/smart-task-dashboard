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
    <section className="h-fit rounded-2xl border border-slate-800/80 bg-slate-900/75 p-6 shadow-xl shadow-slate-950/30 backdrop-blur">
      <h2 className="text-lg font-semibold text-slate-100 sm:text-xl">Add Task</h2>
      <p className="mt-1 text-sm text-slate-400">
        Create a new task and add it to your board.
      </p>

      <div className="mt-5 flex flex-col gap-3">
        <input
          className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
          type="text"
          placeholder="Enter task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          onClick={handleAddTask}
          className="rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-950 transition hover:bg-cyan-400"
        >
          Add
        </button>
      </div>
    </section>
  );
}

export default AddTask;