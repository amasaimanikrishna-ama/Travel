import React from 'react';

export default function ReviewForm() {
  return (
    <form className="p-6 bg-slate-50 rounded-2xl space-y-4">
      <h4 className="font-semibold text-slate-800 text-sm">Write a Review</h4>
      <textarea placeholder="Share your experience..." className="w-full border rounded-xl p-3 text-sm" rows={3} />
      <button type="submit" className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-xl">
        Submit Review
      </button>
    </form>
  );
}
