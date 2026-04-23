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

  return (
    <div className="bg-gray-800 flex flex-col min-h-screen items-center justify-center text-white p-4">
      <h2 className="text-xl font-bold mb-4">Task List</h2>

      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-gray-700 w-72 p-3 rounded mb-2 flex justify-between items-center"
        >
          <span>{task.text}</span>

          <button
            onClick={() => handleDelete(task.id)}
            className="bg-red-600 px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;