export default function PaginationButton({
  currentPage,
  handlePageChange,
  pageNumber,
}) {
  return (
    <button
      key={pageNumber}
      className={`px-4 py-2 rounded-lg border border-blue-500 text-sm font-medium transition-colors duration-200 ${
        currentPage === pageNumber
          ? "bg-blue-500 text-white"
          : "bg-white text-blue-500 hover:bg-blue-100"
      }`}
      onClick={() => handlePageChange(pageNumber)}
    >
      {pageNumber}
    </button>
  );
}
