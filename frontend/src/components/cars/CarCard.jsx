import React from 'react';
import { Link } from 'react-router-dom';

export default function CarCard({ car }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="h-48 bg-slate-100 flex items-center justify-center text-slate-400 font-medium">
        {car && car.image ? <img src={car.image} alt={car.name} className="w-full h-full object-cover" /> : 'Car Image'}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-slate-900 text-base">{(car && car.name) || 'Hyundai Creta'}</h3>
          <span className="text-xs px-2 py-1 bg-emerald-50 text-emerald-700 font-medium rounded-full">Automatic</span>
        </div>
        <p className="text-xs text-slate-500 mt-1">{(car && car.type) || 'SUV'} • 5 Seats • Petrol</p>
        <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
          <div>
            <span className="text-xs text-slate-400">Starting at</span>
            <p className="text-lg font-bold text-blue-600">${(car && car.price) || 49}<span className="text-xs text-slate-500 font-normal">/day</span></p>
          </div>
          <Link to={'/self-drive/' + ((car && car.id) || 1)} className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-xl hover:bg-blue-600 transition">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
