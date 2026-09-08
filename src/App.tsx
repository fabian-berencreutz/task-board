import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Column from "./Components/Column";
import TaskCard from "./Components/TaskCard";
import type { Task, NewTask } from "./types/Task";
import NewTaskForm from "./Components/NewTaskForm";

const API_URL = "http://localhost:3000/api/tasks";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Error fetching tasks from backend:", err));
  }, []);

  const handleAddTask = async (newTask: NewTask) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        const savedTask: Task = await response.json();
        setTasks((prevTasks) => [savedTask, ...prevTasks]);
      } else {
        console.error("Failed to save task to backend");
      }
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  const filteredTasks = tasks.filter((task) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;

    return (
      task.title.toLowerCase().includes(query) ||
      task.description.toLowerCase().includes(query) ||
      task.category.toLowerCase().includes(query) ||
      task.assignee.toLowerCase().includes(query) ||
      task.priority.toLowerCase().includes(query)
    );
  });

  const todoTasks = filteredTasks.filter((task) => task.status === "todo");
  const doingTasks = filteredTasks.filter((task) => task.status === "doing");
  const doneTasks = filteredTasks.filter((task) => task.status === "done");

  return (
    <div className="min-h-screen bg-sky-50 text-slate-800 p-4 md:p-8">
      <div className="max-w-7xl w-full mx-auto space-y-8">
        <Header />
        <main className="space-y-8">
          <NewTaskForm onAddTask={handleAddTask} />

          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <label htmlFor="search" className="block text-sm font-medium text-slate-700 mb-1">
              Search Tasks
            </label>
            <input
              id="search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, description, category, assignee, or priority..."
              className="w-full border border-slate-300 rounded-lg p-2.5 bg-slate-50 text-slate-800 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Column title="Todo">
              {todoTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  category={task.category}
                  priority={task.priority}
                  assignee={task.assignee}
                />
              ))}
            </Column>

            <Column title="Doing">
              {doingTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  category={task.category}
                  priority={task.priority}
                  assignee={task.assignee}
                />
              ))}
            </Column>

            <Column title="Done">
              {doneTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  category={task.category}
                  priority={task.priority}
                  assignee={task.assignee}
                />
              ))}
            </Column>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
