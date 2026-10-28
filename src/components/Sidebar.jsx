import Icon from "../Icon/Icon";
import { IMG } from "../config";
import { NAV_SECTIONS } from "../data/navigation";

function Sidebar({ active, onSelect }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <div className="brand">
          <img
            className="brand__logo"
            src={`${IMG}/logo.png`}
            alt=""
            onError={(event) => (event.currentTarget.style.display = "none")}
          />
          <span className="brand__name">DORA</span>
        </div>
        <button className="icon-btn icon-btn--ghost" aria-label="Collapse sidebar">
          <Icon name="collapse" />
        </button>
      </div>
      <nav className="sidebar__nav">
        {NAV_SECTIONS.map((section) => (
          <div className="nav-section" key={section.title}>
            <p className="nav-section__title">{section.title}</p>
            {section.items.map((item) => (
              <button
                key={item.label}
                className={`nav-item ${active === item.label ? "nav-item--active" : ""}`}
                onClick={() => onSelect(item.label)}
              >
                <Icon name={item.icon} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        ))}
      </nav>
      <div className="sidebar__footer">
        <button className="user-card">
          <img
            className="avatar"
            style={{ width: 28, height: 28 }}
            src={`${IMG}/avatars/man-4.png`}
            alt=""
            onError={(event) => (event.currentTarget.style.display = "none")}
          />
          <span className="user-card__info">
            <strong>Craig Calzoni</strong>
            <small>craigcalzoni454@yahoo.com</small>
          </span>
          <Icon name="chevronRight" size={12} />
        </button>
        <button className="btn btn--muted btn--block">
          Log out <Icon name="logout" />
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
