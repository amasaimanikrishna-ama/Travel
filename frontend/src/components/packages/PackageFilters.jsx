import React from 'react';

export default function PackageFilters() {
  return (
    <div className="p-5 bg-white rounded-2xl border border-slate-100 space-y-4">
      <h4 className="font-semibold text-slate-800 text-sm">Duration</h4>
      <div className="space-y-2 text-sm text-slate-600">
        <label className="flex items-center gap-2"><input type="checkbox" /> 1-3 Days</label>
        <label className="flex items-center gap-2"><input type="checkbox" /> 4-7 Days</label>
        <label className="flex items-center gap-2"><input type="checkbox" /> 8+ Days</label>
      </div>
    </div>
  );
}
