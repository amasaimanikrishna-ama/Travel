import React from 'react';

export default function BookingStatus({ status = 'Confirmed' }) {
  const styles = {
    Confirmed: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Pending: 'bg-amber-50 text-amber-700 border-amber-200',
    Cancelled: 'bg-rose-50 text-rose-700 border-rose-200',
  };

  return (
    <span className={'px-3 py-1 rounded-full text-xs font-semibold border ' + (styles[status] || styles.Pending)}>
      {status}
    </span>
  );
}
