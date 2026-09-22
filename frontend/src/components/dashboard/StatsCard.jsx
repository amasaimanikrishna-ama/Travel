import React from 'react';

export default function StatsCard({ title, value, change, icon }) {
  return (
    <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-xs">
      <div className="flex justify-between items-start">
        <span className="text-xs font-medium text-slate-500">{title}</span>
        {icon && <span className="text-lg">{icon}</span>}
      </div>
      <p className="text-2xl font-bold text-slate-900 mt-2">{value}</p>
      {change && <span className="text-xs text-emerald-600 font-medium">{change}</span>}
    </div>
  );
}
