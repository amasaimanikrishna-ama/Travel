import React from 'react';
import BookingStepper from '../../components/booking/BookingStepper';
import GuestDetails from '../../components/booking/GuestDetails';

export default function Checkout() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <BookingStepper currentStep={1} />
      <GuestDetails />
    </div>
  );
}
