import { useMemo, useState } from "react";
import EmployeeTable from "./components/EmployeeTable";
import Pagination from "./components/Pagination";
import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";
import Topbar from "./components/Topbar";
import Icon from "./Icon/Icon";
import { INITIAL_EMPLOYEES, STATS } from "./data/employees";
import { exportCsv } from "./utils/exportCsv";
import "./App.css";

export default function App() {
  const [activeNav, setActiveNav] = useState("Employees");
  const [employees, setEmployees] = useState(INITIAL_EMPLOYEES);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return employees;
    return employees.filter((employee) =>
      [employee.name, employee.role, employee.dept].some((value) =>
        value.toLowerCase().includes(q)
      )
    );
  }, [employees, query]);

  const updateStatus = (id, status) =>
    setEmployees((list) =>
      list.map((employee) =>
        employee.id === id ? { ...employee, status } : employee
      )
    );

  const handleExport = () => exportCsv(filtered, "employees.csv");
  return (
    <div className="app">
      <Sidebar active={activeNav} onSelect={setActiveNav} />
      <div className="main">
        <Topbar onExport={handleExport} />
        <main className="content">
          <section className="content__head">
            <div>
              <h1>Employee Directory</h1>
              <p>Manage your team members and their information</p>
            </div>
            <div className="content__tools">
              <label className="search">
                <Icon name="search" />
                <input
                  type="text"
                  placeholder="Search by name, role or department..."
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </label>
              <button className="btn btn--outlined">
                <Icon name="filter" /> Filter
              </button>
              <button className="btn btn--outlined">
                <Icon name="calendar" /> Sep,2025
              </button>
            </div>
          </section>
          <section className="stats">
            {STATS.map((stat) => (
              <StatCard key={stat.title} stat={stat} />
            ))}
          </section>
          <EmployeeTable
            employees={filtered}
            onApprove={(id) => updateStatus(id, "On Leave")}
            onReject={(id) => updateStatus(id, "Active")}
          />
          <Pagination page={page} onChange={setPage} />
        </main>
      </div>
    </div>
  );
}
