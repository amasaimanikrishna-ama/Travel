import React from 'react';

export default function CarSpecifications() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-50 rounded-2xl">
      <div>
        <span className="text-xs text-slate-500">Transmission</span>
        <p className="font-semibold text-slate-800 text-sm">Automatic</p>
      </div>
      <div>
        <span className="text-xs text-slate-500">Fuel Type</span>
        <p className="font-semibold text-slate-800 text-sm">Petrol</p>
      </div>
      <div>
        <span className="text-xs text-slate-500">Seating</span>
        <p className="font-semibold text-slate-800 text-sm">5 Seats</p>
      </div>
      <div>
        <span className="text-xs text-slate-500">Luggage</span>
        <p className="font-semibold text-slate-800 text-sm">2 Bags</p>
      </div>
    </div>
  );
}
