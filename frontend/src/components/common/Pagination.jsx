import React from 'react';

export default function Pagination({ currentPage = 1, totalPages = 1, onPageChange }) {
  return (
    <div className="flex items-center justify-center gap-2 py-4">
      <button
        disabled={currentPage <= 1}
        onClick={() => onPageChange && onPageChange(currentPage - 1)}
        className="px-3 py-1.5 text-sm rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-50"
      >
        Previous
      </button>
      <span className="text-sm text-slate-600">
        Page {currentPage} of {totalPages}
      </span>
      <button
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange && onPageChange(currentPage + 1)}
        className="px-3 py-1.5 text-sm rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
