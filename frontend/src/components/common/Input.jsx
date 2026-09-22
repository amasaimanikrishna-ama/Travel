import React from 'react';

export default function Input({ label, error, helperText, className = '', id, ...props }) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={'w-full px-4 py-2.5 rounded-xl border bg-white text-slate-900 placeholder-slate-400 transition focus:outline-none focus:ring-2 ' + (
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
            : 'border-slate-200 focus:border-blue-500 focus:ring-blue-100'
        ) + ' ' + className}
        {...props}
      />
      {error ? (
        <span className="text-xs text-red-500">{error}</span>
      ) : helperText ? (
        <span className="text-xs text-slate-500">{helperText}</span>
      ) : null}
    </div>
  );
}
