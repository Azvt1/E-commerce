export default function Pagination({
  totalItems,
  itemsPerPage,
  setCurrentPage,
}) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }
  console.log(pages);

  return (
    <div>
      {pages.map((page, index) => (
        <button
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
