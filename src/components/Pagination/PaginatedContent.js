"use client";

import PaginationButton from "./PaginationButton";
import PaginatedReviewList from "./PaginatedReviewList";
import { usePagination } from "@/hooks/usePagination";
import BackButton from "../BackButton";
import NoResult from "../Search/NoResult";
import Search from "../Search/Search";

export default function PaginatedContent({ data, searchData, query }) {
  const { totalPages, reviews, handlePageChange, currentPage } =
    usePagination(data);

  const showNoResult = query && searchData.length === 0;
  const showSearchResult = query && searchData.length > 0;

  return (
    <>
      <BackButton />
      <Search placeholder="Search" />
      {showNoResult ? (
        <NoResult />
      ) : (
        <PaginatedReviewList
          reviews={showSearchResult ? searchData : reviews}
        />
      )}
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
