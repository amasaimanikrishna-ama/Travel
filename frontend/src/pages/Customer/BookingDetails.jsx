import React from 'react';
import { useParams } from 'react-router-dom';

export default function BookingDetails() {
  const { id } = useParams();
  return <div className="p-6 bg-white rounded-2xl border border-slate-100"><h2 className="text-xl font-bold">Booking #{id}</h2></div>;
}
