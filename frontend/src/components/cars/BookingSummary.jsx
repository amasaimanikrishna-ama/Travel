import React from 'react';

export default function BookingSummary() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
      <h4 className="font-semibold text-slate-800 mb-4">Price Breakdown</h4>
      <div className="space-y-2 text-sm text-slate-600">
        <div className="flex justify-between"><span>Rental Fee (3 days)</span><span>$150.00</span></div>
        <div className="flex justify-between"><span>Taxes & Fees</span><span>$18.00</span></div>
        <div className="flex justify-between font-bold text-slate-900 pt-2 border-t"><span>Total</span><span>$168.00</span></div>
      </div>
    </div>
  );
}
