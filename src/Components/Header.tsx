import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <p className="text-xs uppercase text-slate-400 font-semibold mb-1">Labb 1</p>
        <h1 className="text-3xl font-bold text-slate-900">Task Board</h1>
        <p className="text-slate-600 mt-1">This is a simple task board</p>
      </div>
      <nav className="flex gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg text-sm font-semibold transition ${
              isActive
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`
          }
        >
          Task Board
        </NavLink>
        <NavLink
          to="/new-task"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg text-sm font-semibold transition ${
              isActive
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`
          }
        >
          + Ny Task
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

