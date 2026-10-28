import Icon from "../Icon/Icon";
import { TOTAL_PAGES } from "../data/employees";

const PAGES = [1, 2, 3, "...", TOTAL_PAGES];

function Pagination({ page, onChange }) {
  return (
    <nav className="pagination" aria-label="Pagination">
      <button
        className="page-btn"
        onClick={() => onChange(Math.max(1, page - 1))}
        aria-label="Previous page"
      >
        <Icon name="chevronLeft" size={14} />
      </button>
      {PAGES.map((number, index) =>
        number === "..." ? (
          <span key={`dots-${index}`} className="page-btn page-btn--dots">
            ...
          </span>
        ) : (
          <button
            key={number}
            className={`page-btn ${page === number ? "page-btn--active" : ""}`}
            onClick={() => onChange(number)}
          >
            {number}
          </button>
        )
      )}
      <button
        className="page-btn"
        onClick={() => onChange(Math.min(TOTAL_PAGES, page + 1))}
        aria-label="Next page"
      >
        <Icon name="chevronRight" size={14} />
      </button>
    </nav>
  );
}

export default Pagination;
