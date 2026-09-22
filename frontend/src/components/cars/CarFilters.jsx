import React from 'react';

export default function CarFilters() {
  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-100 space-y-6">
      <h4 className="font-semibold text-slate-800 text-sm">Filters</h4>
      <div>
        <label className="text-xs font-medium text-slate-500 uppercase">Vehicle Type</label>
        <div className="mt-2 space-y-1.5 text-sm text-slate-700">
          <label className="flex items-center gap-2"><input type="checkbox" /> SUV</label>
          <label className="flex items-center gap-2"><input type="checkbox" /> Sedan</label>
          <label className="flex items-center gap-2"><input type="checkbox" /> Hatchback</label>
          <label className="flex items-center gap-2"><input type="checkbox" /> Luxury</label>
        </div>
      </div>
    </div>
  );
}
