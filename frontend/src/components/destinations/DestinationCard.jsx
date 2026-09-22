import React from 'react';
import { Link } from 'react-router-dom';

export default function DestinationCard({ destination }) {
  return (
    <Link to={'/destinations/' + ((destination && destination.id) || 1)} className="group block bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition">
      <div className="h-44 bg-slate-100 flex items-center justify-center text-slate-400">Destination Image</div>
      <div className="p-4">
        <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition">{(destination && destination.name) || 'Bali'}</h4>
        <p className="text-xs text-slate-500 mt-1">{(destination && destination.country) || 'Indonesia'}</p>
      </div>
    </Link>
  );
}
