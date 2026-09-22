import React from 'react';
import { useParams } from 'react-router-dom';
import Itinerary from '../../components/packages/Itinerary';
import PackageBooking from '../../components/packages/PackageBooking';

export default function PackageDetails() {
  const { id } = useParams();
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <h1 className="text-3xl font-bold text-slate-900">Swiss Winter Wonderland</h1>
          <Itinerary />
        </div>
        <div>
          <PackageBooking />
        </div>
      </div>
    </div>
  );
}
