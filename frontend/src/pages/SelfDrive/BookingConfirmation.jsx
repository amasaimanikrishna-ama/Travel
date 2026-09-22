import React from 'react';
import ConfirmationCard from '../../components/booking/BookingConfirmation';

export default function BookingConfirmation() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <ConfirmationCard bookingId="DRV-99021" />
    </div>
  );
}
