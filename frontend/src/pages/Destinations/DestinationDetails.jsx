import React from 'react';
import { useParams } from 'react-router-dom';
import DestinationHero from '../../components/destinations/DestinationHero';
import DestinationMap from '../../components/destinations/DestinationMap';
import ThingsToDo from '../../components/destinations/ThingsToDo';

export default function DestinationDetails() {
  const { id } = useParams();
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <DestinationHero title="Bali Paradise" subtitle="Tropical beaches, vibrant culture and retreats" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <ThingsToDo />
        </div>
        <div>
          <DestinationMap />
        </div>
      </div>
    </div>
  );
}
