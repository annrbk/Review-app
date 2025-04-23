"use client";

import PaginationButton from "./PaginationButton";
import PaginatedReviewList from "./PaginatedReviewList";
import { usePagination } from "@/hooks/usePagination";

export default function PaginatedContent({ data }) {
  const { totalPages, reviews, handlePageChange, currentPage } =
    usePagination(data);

  return (
    <>
      <PaginatedReviewList reviews={reviews} />
      <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
        <div className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </div>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <PaginationButton
                key={pageNumber}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
                pageNumber={pageNumber}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}
