import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Column from "./Components/Column";
import TaskCard from "./Components/TaskCard";
import type { Task } from "./types/Task";

const tasks: Task[] = [
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
  const todoTasks = tasks.filter((task) => task.status === "todo");
  const doingTasks = tasks.filter((task) => task.status === "doing");
  const doneTasks = tasks.filter((task) => task.status === "done");

  return (
    <div>
      <Header />
      <main>
        <div className="board">
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
  );
};

export default App;
