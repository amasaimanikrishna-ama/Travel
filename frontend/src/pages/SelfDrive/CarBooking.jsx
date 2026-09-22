import React from 'react';
import BookingStepper from '../../components/booking/BookingStepper';
import GuestDetails from '../../components/booking/GuestDetails';
import BookingSummary from '../../components/cars/BookingSummary';

export default function CarBooking() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BookingStepper currentStep={1} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <GuestDetails />
        </div>
        <div>
          <BookingSummary />
        </div>
      </div>
    </div>
  );
}
