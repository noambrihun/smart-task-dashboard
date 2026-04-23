type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

function TaskList({ tasks, setTasks }: Props) {

  const handleDelete = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleEdit = (id: number) => {
  const newText = prompt("Edit task:");

  if (!newText || newText.trim() === "") return;

  setTasks((prev) =>
    prev.map((task) =>
      task.id === id
        ? { ...task, text: newText }
        : task
    )
  );
};

  return (
    <section className="rounded-2xl border border-slate-800/80 bg-slate-900/75 p-6 shadow-xl shadow-slate-950/30 backdrop-blur">
      <div className="mb-5 flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-slate-100 sm:text-xl">Task List</h2>
        <span className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-300">
          {tasks.length} tasks
        </span>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <article
            key={task.id}
            className="flex flex-col gap-3 rounded-xl border border-slate-700/70 bg-slate-800/70 p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="break-words text-slate-100">{task.text}</span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleEdit(task.id)}
                className="rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-medium text-slate-950 transition hover:bg-amber-400"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(task.id)}
                className="rounded-lg bg-rose-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-rose-500"
              >
                Delete
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TaskList;