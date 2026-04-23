type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type Props = {
  tasks: Task[];
};

function TaskList({ tasks }: Props) {
  return (
    <div className="bg-gray-800 flex flex-col min-h-screen items-center justify-center text-white p-4">
      <h2 className="text-xl font-bold mb-4">Task List</h2>

      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-gray-700 w-64 p-3 rounded mb-2"
        >
          {task.text}
        </div>
      ))}
    </div>
  );
}

export default TaskList;