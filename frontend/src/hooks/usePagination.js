import { useState } from 'react';

export function usePagination(initialPage = 1, totalItems = 0, itemsPerPage = 10) {
  const [page, setPage] = useState(initialPage);
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  return {
    page,
    totalPages,
    nextPage: () => setPage((p) => Math.min(p + 1, totalPages)),
    prevPage: () => setPage((p) => Math.max(p - 1, 1)),
    setPage,
  };
}
