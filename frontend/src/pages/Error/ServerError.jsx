import React from 'react';
import { Link } from 'react-router-dom';

export default function ServerError() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-7xl font-extrabold text-rose-600">500</h1>
      <h2 className="text-2xl font-bold text-slate-900 mt-4">Internal Server Error</h2>
      <p className="text-slate-500 text-sm mt-2 max-w-sm">Something went wrong on our end. Please try again later.</p>
      <Link to="/" className="mt-6 px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold text-sm">
        Back to Home
      </Link>
    </div>
  );
}
