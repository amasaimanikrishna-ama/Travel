import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-7xl font-extrabold text-blue-600">404</h1>
      <h2 className="text-2xl font-bold text-slate-900 mt-4">Page Not Found</h2>
      <p className="text-slate-500 text-sm mt-2 max-w-sm">The page you are looking for might have been removed or is temporarily unavailable.</p>
      <Link to="/" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold text-sm hover:bg-blue-700">
        Back to Home
      </Link>
    </div>
  );
}
