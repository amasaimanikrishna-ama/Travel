import React from 'react';
import CarCard from './CarCard';

export default function CarGrid({ cars = [1, 2, 3, 4, 5, 6] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((c, i) => (
        <CarCard key={i} car={typeof c === 'object' ? c : { id: c }} />
      ))}
    </div>
  );
}
