import React from 'react';

export default function Rating({ value = 5 }) {
  return (
    <div className="flex text-amber-400 text-sm">
      {'★'.repeat(value)}{'☆'.repeat(5 - value)}
    </div>
  );
}
