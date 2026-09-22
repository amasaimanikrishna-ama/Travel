import React from 'react';

export default function RentalRules() {
  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-100 text-sm space-y-2">
      <h4 className="font-semibold text-slate-800">Rental Requirements</h4>
      <ul className="list-disc list-inside text-slate-600 text-xs space-y-1">
        <li>Valid Driving License (minimum 1 year old)</li>
        <li>Government ID proof (Passport / Driver's License)</li>
        <li>Security deposit required at pickup</li>
      </ul>
    </div>
  );
}
