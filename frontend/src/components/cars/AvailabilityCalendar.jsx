import React from 'react';

export default function AvailabilityCalendar() {
  return (
    <div className="p-4 bg-white border border-slate-100 rounded-2xl">
      <h4 className="text-sm font-semibold text-slate-800 mb-2">Check Availability</h4>
      <input type="date" className="w-full border rounded-xl p-2 text-sm" />
    </div>
  );
}
