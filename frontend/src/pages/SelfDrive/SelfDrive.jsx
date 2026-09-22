import React from 'react';
import CarGrid from '../../components/cars/CarGrid';
import CarFilters from '../../components/cars/CarFilters';

export default function SelfDrive() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Self-Drive Car Rentals</h1>
        <p className="text-slate-500">Pick from top condition cars with zero security deposit worries</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div>
          <CarFilters />
        </div>
        <div className="lg:col-span-3">
          <CarGrid />
        </div>
      </div>
    </div>
  );
}
