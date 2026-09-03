type TaskCardProps = {
  title: string;
  id: number;
  description: string;
  assignee: string;
  category: string;
  priority: "low" | "medium" | "high";
};

const TaskCard = ({
  id,
  title,
  description,
  assignee,
  category,
  priority,
}: TaskCardProps) => {
  return (
    <article className="task-card">
      <p>ID: {id}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Assignee: {assignee}</p>
      <p>Category: {category}</p>
      <p>
        Priority: <span className={`priority ${priority}`}>{priority}</span>
      </p>
    </article>
  );
};
export default TaskCard;
