import type { ReactNode } from "react";

type ColumnProps = {
  title: string;
  children?: ReactNode;
};

const getColumnConfig = (title: string) => {
  const normalized = title.toLowerCase();
  if (normalized.includes("todo")) {
    return {
      border: "border-t-4 border-t-blue-500",
      badge: "bg-blue-100 text-blue-800 border-blue-200",
      dot: "bg-blue-500",
    };
  }
  if (normalized.includes("doing")) {
    return {
      border: "border-t-4 border-t-amber-500",
      badge: "bg-amber-100 text-amber-800 border-amber-200",
      dot: "bg-amber-500",
    };
  }
  if (normalized.includes("done")) {
    return {
      border: "border-t-4 border-t-emerald-500",
      badge: "bg-emerald-100 text-emerald-800 border-emerald-200",
      dot: "bg-emerald-500",
    };
  }
  return {
    border: "border-t-4 border-t-slate-400",
    badge: "bg-slate-100 text-slate-700 border-slate-200",
    dot: "bg-slate-400",
  };
};

const Column = ({ title, children }: ColumnProps) => {
  const config = getColumnConfig(title);

  return (
    <section
      className={`bg-white p-4 rounded-xl flex flex-col gap-4 border border-slate-200 shadow-sm ${config.border}`}
    >
      <div className="pb-2 border-b border-slate-100">
        <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full ${config.dot}`} />
          {title}
        </h2>
      </div>
      <div className="flex flex-col gap-3">{children}</div>
    </section>
  );
};

export default Column;
