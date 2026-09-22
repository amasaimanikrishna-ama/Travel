import React from 'react';

export default function PopularDestinations() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Popular Destinations</h2>
          <p className="text-slate-500 text-sm mt-1">Handpicked spots loved by travelers</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {['Bali, Indonesia', 'Swiss Alps', 'Kyoto, Japan', 'Santorini, Greece'].map((dest, i) => (
          <div key={i} className="group relative rounded-2xl overflow-hidden bg-slate-100 aspect-4/5 shadow-sm hover:shadow-md transition">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10" />
            <div className="absolute bottom-4 left-4 z-20 text-white">
              <h3 className="font-bold text-lg">{dest}</h3>
              <p className="text-xs text-slate-300">Explore 45+ activities</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
