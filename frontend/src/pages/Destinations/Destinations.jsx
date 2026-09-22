import React from 'react';
import DestinationGrid from '../../components/destinations/DestinationGrid';

export default function Destinations() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Explore Destinations</h1>
      <p className="text-slate-500 mb-8">Discover top rated vacation spots worldwide</p>
      <DestinationGrid />
    </div>
  );
}
