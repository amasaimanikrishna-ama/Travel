import React from 'react';

export default function GuestDetails() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-slate-800">Guest Information</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" placeholder="First Name" className="border rounded-xl p-2.5 text-sm" />
        <input type="text" placeholder="Last Name" className="border rounded-xl p-2.5 text-sm" />
        <input type="email" placeholder="Email Address" className="border rounded-xl p-2.5 text-sm" />
        <input type="tel" placeholder="Phone Number" className="border rounded-xl p-2.5 text-sm" />
      </div>
    </div>
  );
}
