import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { NewTask, TaskPriority } from "../types/Task";

type NewTaskFormProps = {
  onAddTask?: (task: NewTask) => void;
};

const NewTaskForm = ({ onAddTask }: NewTaskFormProps) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState<TaskPriority>("low");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTask: NewTask = {
      title,
      description,
      assignee,
      category,
      priority,
    };

    console.log(newTask);
    if (onAddTask) {
      onAddTask(newTask);
    }

    setTitle("");
    setDescription("");
    setAssignee("");
    setCategory("");
    setPriority("low");
    navigate("/");
  };

  const inputStyle =
    "w-full border border-slate-300 rounded-lg p-2.5 bg-slate-50 text-slate-800 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition";
  const labelStyle = "block text-sm font-medium text-slate-700 mb-1";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 max-w-xl mx-auto space-y-4"
    >
      <h2 className="text-xl font-bold text-slate-800 border-b border-slate-100 pb-2">
        Create New Task
      </h2>

      <div>
        <label htmlFor="title" className={labelStyle}>
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className={inputStyle}
          placeholder="Enter task title"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className={labelStyle}>
          Description
        </label>
        <textarea
          id="description"
          rows={3}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className={inputStyle}
          placeholder="Enter task description"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="assignee" className={labelStyle}>
            Assignee
          </label>
          <input
            id="assignee"
            type="text"
            value={assignee}
            onChange={(event) => setAssignee(event.target.value)}
            className={inputStyle}
            placeholder="Assignee name"
          />
        </div>

        <div>
          <label htmlFor="category" className={labelStyle}>
            Category
          </label>
          <input
            id="category"
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className={inputStyle}
            placeholder="e.g. Frontend"
          />
        </div>
      </div>

      <div>
        <label htmlFor="priority" className={labelStyle}>
          Priority
        </label>
        <select
          id="priority"
          value={priority}
          onChange={(event) => setPriority(event.target.value as TaskPriority)}
          className={`${inputStyle} cursor-pointer`}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg shadow-sm transition cursor-pointer text-sm mt-2"
      >
        Create task
      </button>
    </form>
  );
};

export default NewTaskForm;
