import Icon from "../Icon/Icon";

function StatCard({ stat }) {
  return (
    <div className="card stat-card">
      <div className="stat-card__head">
        <span>{stat.title}</span>
        <button className="icon-btn icon-btn--tiny" aria-label="More">
          <Icon name="more" size={14} />
        </button>
      </div>
      <div className="stat-card__value">
        <strong>{stat.value}</strong>
        <span className={`badge badge--${stat.badge.type}`}>{stat.badge.text}</span>
      </div>
      <div className="stat-card__footer">
        {stat.footer.map((footer) => (
          <span key={footer.text} className="stat-card__meta">
            {footer.dot && <i className={`dot dot--${footer.dot}`} />}
            {footer.icon && <Icon name={footer.icon} size={11} />}
            {footer.bold ? (
              <>
                <strong>{footer.bold}</strong>
                {footer.text.slice(footer.bold.length)}
              </>
            ) : (
              footer.text
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export default StatCard;
