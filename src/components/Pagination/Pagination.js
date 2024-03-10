import "./Pagination.css";

export default function Pagination({
  totalItems,
  itemsPerPage,
  setCurrentPage,
  currentPage,
}) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination_container">
      {pages.map((page, index) => (
        <button
          className={currentPage === page ? "active" : ""}
          key={index}
          onClick={() => {
            setCurrentPage(page);
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
