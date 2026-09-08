import { useState } from "react";
import type { TaskPriority } from "../types/Task";

const NewTaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState<TaskPriority>("low");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      title,
      description,
      assignee,
      category,
      priority,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2>Create New Task</h2>
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="assignee">Assignee</label>
        <input
          id="assignee"
          type="text"
          value={assignee}
          onChange={(event) => setAssignee(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <input
          id="category"
          type="text"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="priority">Priority</label>
        <select
          id="priority"
          value={priority}
          onChange={(event) => setPriority(event.target.value as TaskPriority)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <button type="submit">Create task</button>
    </form>
  );
};

export default NewTaskForm;
