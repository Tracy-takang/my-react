import Icon from "../Icon/Icon";

function Topbar({ onExport }) {
    return (
        <header className="topbar">
            <div className="breadcrumb">
                Overview / <strong>Dashboard</strong>
            </div>

            <label className="search search--global">
                <Icon name="search" />
                <input type="text" placeholder="Search employes, documents..." />
                <kbd>⌘ K</kbd>
            </label>

            <div className="topbar__actions">
                <button className="icon-btn icon-btn--outlined" aria-label="Messages">
                    <Icon name="mail" />
                </button>
                <button className="icon-btn icon-btn--outlined" aria-label="Notifications">
                    <Icon name="bell" />
                </button>
                <button className="btn btn--primary" onClick={onExport}>
                    <Icon name="download" /> Export Data
                </button>
            </div>
        </header>
    );
}

export default Topbar;
