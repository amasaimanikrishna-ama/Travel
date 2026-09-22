import React from 'react';

export default function Select({ label, options = [], error, className = '', id, ...props }) {
  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && <label htmlFor={selectId} className="text-sm font-medium text-slate-700">{label}</label>}
      <select
        id={selectId}
        className={'w-full px-4 py-2.5 rounded-xl border bg-white text-slate-900 transition focus:outline-none focus:ring-2 ' + (
          error ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'
        ) + ' ' + className}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}
