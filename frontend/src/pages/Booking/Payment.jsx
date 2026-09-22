import React from 'react';
import BookingStepper from '../../components/booking/BookingStepper';
import PaymentDetails from '../../components/booking/PaymentDetails';

export default function Payment() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <BookingStepper currentStep={2} />
      <PaymentDetails />
    </div>
  );
}
