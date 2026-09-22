import React from 'react';
import { Link } from 'react-router-dom';

export default function BookingConfirmation({ bookingId = 'TRV-89421' }) {
  return (
    <div className="text-center p-8 bg-white rounded-3xl border border-slate-100 max-w-lg mx-auto shadow-sm">
      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
        ✓
      </div>
      <h2 className="text-2xl font-bold text-slate-900">Booking Confirmed!</h2>
      <p className="text-slate-500 text-sm mt-2">
        Thank you for booking with us. Your reference ID is <span className="font-semibold text-slate-800">#{bookingId}</span>.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link to="/customer/my-bookings" className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-medium">
          View My Bookings
        </Link>
        <Link to="/" className="px-5 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-sm font-medium">
          Return Home
        </Link>
      </div>
    </div>
  );
}
