import React from 'react';
import Rating from './Rating';

export default function ReviewCard({ author = 'Alex M.', rating = 5, comment = 'Outstanding experience!' }) {
  return (
    <div className="p-4 rounded-2xl bg-white border border-slate-100 space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-slate-800 text-sm">{author}</span>
        <Rating value={rating} />
      </div>
      <p className="text-xs text-slate-600">{comment}</p>
    </div>
  );
}
