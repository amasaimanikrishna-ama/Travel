import React from 'react';
import PackageCard from '../../components/packages/PackageCard';
import PackageFilters from '../../components/packages/PackageFilters';

export default function Packages() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Tour & Holiday Packages</h1>
      <p className="text-slate-500 mb-8">All-inclusive tours planned to perfection</p>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div><PackageFilters /></div>
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((p) => (
            <PackageCard key={p} pkg={{ id: p }} />
          ))}
        </div>
      </div>
    </div>
  );
}
