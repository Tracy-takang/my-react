import Icon from "../Icon/Icon";
import Avatar from "./Avatars";
import statusClass from "../utils/statusClass";

function EmployeeRow({ employee, onApprove, onReject }) {
  const isRequest = employee.status === "Leave Ask";

  return (
    <tr>
      <td>
        <div className="person">
          <Avatar name={employee.name} file={employee.avatar} />
          <div className="two-line">
            <span className="two-line__main">{employee.name}</span>
            <span className="two-line__sub">{employee.code}</span>
          </div>
        </div>
      </td>
      <td>
        <div className="two-line">
          <span className="two-line__main">{employee.role}</span>
          <span className="two-line__sub">{employee.dept}</span>
        </div>
      </td>
      <td>
        <div className="two-line">
          <span className="two-line__main">{employee.joined}</span>
          <span className="two-line__sub with-icon">
            <Icon name="pin" size={11} /> {employee.location}
          </span>
        </div>
      </td>
      <td>
        <div className="status-cell">
          <div className="two-line">
            <span className={`status status--${statusClass(employee.status)}`}>
              {employee.status}
            </span>
            <span className="two-line__sub with-icon">
              <Icon name="pin" size={11} /> {employee.location}
            </span>
          </div>
          <div className="row-actions">
            {isRequest && (
              <>
                <button
                  className="icon-btn icon-btn--square icon-btn--approve"
                  aria-label="Approve leave"
                  onClick={() => onApprove(employee.id)}
                >
                  <Icon name="check" size={12} />
                </button>
                <button
                  className="icon-btn icon-btn--square icon-btn--reject"
                  aria-label="Reject leave"
                  onClick={() => onReject(employee.id)}
                >
                  <Icon name="close" size={12} />
                </button>
              </>
            )}
            <button className="icon-btn icon-btn--square" aria-label="More options">
              <Icon name="more" size={14} />
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default EmployeeRow;
