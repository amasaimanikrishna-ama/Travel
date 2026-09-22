import React from 'react';

export default function ThingsToDo() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-slate-900">Top Things to Do</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {['City Walking Tour', 'Museum Pass', 'Sunset Cruise', 'Local Culinary Class'].map((item, i) => (
          <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100 font-medium text-sm text-slate-800">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
