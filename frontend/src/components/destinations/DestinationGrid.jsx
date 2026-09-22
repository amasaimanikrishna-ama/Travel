import React from 'react';
import DestinationCard from './DestinationCard';

export default function DestinationGrid({ destinations = [1, 2, 3, 4] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {destinations.map((d, i) => (
        <DestinationCard key={i} destination={typeof d === 'object' ? d : { id: d }} />
      ))}
    </div>
  );
}
