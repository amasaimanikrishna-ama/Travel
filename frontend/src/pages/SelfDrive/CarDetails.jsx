import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CarGallery from '../../components/cars/CarGallery';
import CarSpecifications from '../../components/cars/CarSpecifications';
import RentalRules from '../../components/cars/RentalRules';

export default function CarDetails() {
  const { id } = useParams();
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <CarGallery />
          <h2 className="text-2xl font-bold text-slate-900">Hyundai Creta 2024</h2>
          <CarSpecifications />
          <RentalRules />
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-slate-900">$49 / day</h3>
            <Link
              to={'/self-drive/' + (id || 1) + '/book'}
              className="block text-center w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700"
            >
              Book This Car
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
