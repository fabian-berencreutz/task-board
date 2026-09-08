type TaskCardProps = {
  title: string;
  id: number;
  description: string;
  assignee: string;
  category: string;
  priority: "low" | "medium" | "high";
};

const priorityStyles = {
  low: "bg-emerald-100 text-emerald-800 border-emerald-300",
  medium: "bg-amber-100 text-amber-800 border-amber-300",
  high: "bg-rose-100 text-rose-800 border-rose-300",
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
    <article className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 flex flex-col gap-2 transition hover:shadow-md">
      <div className="flex justify-between items-center text-xs text-slate-500">
        <span>ID: {id}</span>
        <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-medium">
          Category: {category}
        </span>
      </div>

      <h3 className="text-base font-bold text-slate-900 mt-1">{title}</h3>
      <p className="text-sm text-slate-600">{description}</p>

      <div className="flex justify-between items-center text-xs text-slate-500 pt-2 border-t border-slate-100 mt-1">
        <p>
          Assignee: <span className="font-medium text-slate-700">{assignee}</span>
        </p>
        <p>
          Priority:{" "}
          <span
            className={`px-2 py-0.5 text-xs font-semibold rounded border uppercase ${priorityStyles[priority]}`}
          >
            {priority}
          </span>
        </p>
      </div>
    </article>
  );
};

export default TaskCard;
