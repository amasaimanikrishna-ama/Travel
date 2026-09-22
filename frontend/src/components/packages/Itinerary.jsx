import React from 'react';

export default function Itinerary() {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-slate-900 text-lg">Detailed Itinerary</h3>
      <div className="border-l-2 border-blue-500 pl-4 space-y-6">
        <div>
          <span className="text-xs font-bold text-blue-600">DAY 1</span>
          <h4 className="text-sm font-semibold text-slate-800">Arrival and Hotel Check-in</h4>
          <p className="text-xs text-slate-500 mt-1">Welcome drink and evening free leisure time.</p>
        </div>
        <div>
          <span className="text-xs font-bold text-blue-600">DAY 2</span>
          <h4 className="text-sm font-semibold text-slate-800">Guided City Tour & Sightseeing</h4>
          <p className="text-xs text-slate-500 mt-1">Visit main landmarks and historical places.</p>
        </div>
      </div>
    </div>
  );
}
