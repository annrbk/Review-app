import { useState } from "react";

export const usePagination = (data) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage, setReviewsPerPage] = useState(10);

  const totalPages = Math.ceil(data.length / reviewsPerPage);

  const reviews = data.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return { totalPages, reviews, handlePageChange, currentPage };
};
