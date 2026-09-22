import React from 'react';

export default function CarPricing({ dailyRate = 50 }) {
  return (
    <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-2xl">
      <div className="flex justify-between items-center">
        <span className="text-sm text-slate-600">Daily Rate</span>
        <span className="text-lg font-bold text-slate-900">${dailyRate}/day</span>
      </div>
    </div>
  );
}
