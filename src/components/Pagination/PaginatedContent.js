"use client";

import PaginationButton from "./PaginationButton";
import PaginatedReviewList from "./PaginatedReviewList";
import BackButton from "../BackButton";
import NoResult from "../Search/NoResult";
import Search from "../Search/Search";
import EmptyState from "../EmptyState";
import { usePathname, useSearchParams } from "next/navigation";

export default function PaginatedContent({
  data,
  query,
  totalPages,
  currentPage,
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <>
      <BackButton />
      <Search placeholder="Search" />
      {data.length === 0 ? (
        query ? (
          <NoResult />
        ) : (
          <EmptyState />
        )
      ) : (
        <PaginatedReviewList reviews={data} />
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
                pageNumber={pageNumber}
                createPageURL={createPageURL}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}
