import React from 'react';

export default function PaymentDetails() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-slate-800">Payment Details</h3>
      <input type="text" placeholder="Card Number" className="w-full border rounded-xl p-2.5 text-sm" />
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="MM/YY" className="border rounded-xl p-2.5 text-sm" />
        <input type="text" placeholder="CVC" className="border rounded-xl p-2.5 text-sm" />
      </div>
    </div>
  );
}
