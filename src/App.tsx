import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white flex items-center justify-center">
      <div className="bg-gray-950 p-4 w-1/5">
        <h1>Task</h1>
        <TaskList />
        <TaskForm />
      </div>
    </div>
  );
}

export default App;
