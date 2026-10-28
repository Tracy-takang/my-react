import Icon from "../Icon/Icon";
import EmployeeRow from "./EmployeeRow";

const COLUMNS = ["Employee list", "Role", "Join Date"];

function EmployeeTable({ employees, onApprove, onReject }) {
  return (
    <section className="card table-card">
      <table className="table">
        <thead>
          <tr>
            {COLUMNS.map((label) => (
              <th key={label}>
                <span className="th">
                  {label} <Icon name="sort" size={13} />
                </span>
              </th>
            ))}
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <EmployeeRow
              key={employee.id}
              employee={employee}
              onApprove={onApprove}
              onReject={onReject}
            />
          ))}
          {employees.length === 0 && (
            <tr>
              <td colSpan={4} className="table__empty">
                No employees match your search.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}

export default EmployeeTable;
