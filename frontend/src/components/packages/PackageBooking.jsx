import React from 'react';

export default function PackageBooking() {
  return (
    <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-4">
      <h4 className="font-semibold text-slate-900">Book This Package</h4>
      <input type="date" className="w-full border rounded-xl p-2.5 text-sm" />
      <button className="w-full bg-blue-600 text-white font-medium py-2.5 rounded-xl text-sm hover:bg-blue-700">
        Proceed to Checkout
      </button>
    </div>
  );
}
