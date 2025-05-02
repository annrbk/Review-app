import Link from "next/link";

export default function PaginationButton({
  currentPage,
  createPageURL,
  pageNumber,
}) {
  return (
    <>
      <Link href={createPageURL(pageNumber)}>
        <span
          className={`px-4 py-2 rounded-lg border border-blue-500 text-sm font-medium transition-colors duration-200 ${
            currentPage === pageNumber
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-500 hover:bg-blue-100"
          }`}
        >
          {pageNumber}
        </span>
      </Link>
    </>
  );
}
