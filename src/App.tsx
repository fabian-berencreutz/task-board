import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Column from "./Components/Column";
import TaskCard from "./Components/TaskCard";
import type { Task, NewTask } from "./types/Task";
import NewTaskForm from "./Components/NewTaskForm";

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Designa Startsidan",
    description: "Skapa wireframes och färgschema för applikationen.",
    category: "Design",
    priority: "high",
    assignee: "Anna Svensson",
    status: "todo",
  },
  {
    id: 2,
    title: "Skapa Databas-schema",
    description: "Definiera modeller och relationer i PostgreSQL.",
    category: "Backend",
    priority: "high",
    assignee: "David Nilsson",
    status: "todo",
  },
  {
    id: 3,
    title: "Planera Sprint",
    description: "Sätta upp användarberättelser och estimera tid.",
    category: "Projektledning",
    priority: "low",
    assignee: "Sara Ek",
    status: "todo",
  },
  {
    id: 4,
    title: "Implementera Auth",
    description: "Skapa inloggning och registrering med JWT.",
    category: "Utveckling",
    priority: "medium",
    assignee: "Erik Johansson",
    status: "doing",
  },
  {
    id: 5,
    title: "Bygga API-endpoints",
    description: "Skapa REST API för tasks och kolumner.",
    category: "Backend",
    priority: "high",
    assignee: "Johan Berg",
    status: "doing",
  },
  {
    id: 6,
    title: "Styling med CSS",
    description: "Applicera designsystem och responsiv layout.",
    category: "Frontend",
    priority: "medium",
    assignee: "Anna Svensson",
    status: "doing",
  },
  {
    id: 7,
    title: "Skriva Enhetstester",
    description: "Skriva tester för TaskCard- och Header-komponenterna.",
    category: "Testning",
    priority: "low",
    assignee: "Maria Lind",
    status: "done",
  },
  {
    id: 8,
    title: "Sätta upp CI/CD pipeline",
    description: "Konfigurera GitHub Actions för automatiska tester.",
    category: "DevOps",
    priority: "medium",
    assignee: "David Nilsson",
    status: "done",
  },
  {
    id: 9,
    title: "Kravanalys",
    description: "Samla in funktionella krav från intressenter.",
    category: "Analys",
    priority: "low",
    assignee: "Sara Ek",
    status: "done",
  },
];

const App = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddTask = (newTask: NewTask) => {
    const createdTask: Task = {
      ...newTask,
      id: Date.now(),
      status: "todo",
    };
    setTasks((prevTasks) => [createdTask, ...prevTasks]);
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
