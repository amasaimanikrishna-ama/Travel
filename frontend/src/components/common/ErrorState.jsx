import React from 'react';

export default function ErrorState({ title = 'Something went wrong', message = 'Failed to load information.', onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-rose-50/60 rounded-2xl border border-rose-200">
      <h4 className="text-base font-semibold text-rose-800">{title}</h4>
      <p className="mt-1 text-sm text-rose-600">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 px-4 py-2 bg-rose-600 text-white rounded-xl text-sm font-medium hover:bg-rose-700"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
