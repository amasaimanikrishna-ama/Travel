import React from 'react';
import { Link } from 'react-router-dom';

export default function PackageCard({ pkg }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition">
      <div className="h-44 bg-slate-100 flex items-center justify-center text-slate-400">Package Image</div>
      <div className="p-5">
        <span className="text-xs font-semibold text-blue-600 uppercase">5 Days / 4 Nights</span>
        <h4 className="font-bold text-slate-900 mt-1">{(pkg && pkg.title) || 'Swiss Winter Magic'}</h4>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-base font-bold text-slate-900">${(pkg && pkg.price) || 799}</span>
          <Link to={'/packages/' + ((pkg && pkg.id) || 1)} className="text-xs font-semibold text-blue-600 hover:underline">
            View Package →
          </Link>
        </div>
      </div>
    </div>
  );
}
