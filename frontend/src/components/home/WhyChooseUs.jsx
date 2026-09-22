import React from 'react';

export default function WhyChooseUs() {
  const perks = [
    { title: 'Best Price Guarantee', desc: 'Top rates without hidden charges' },
    { title: '24/7 Roadside Assistance', desc: 'Instant support on every journey' },
    { title: '100% Verified Fleet', desc: 'Regularly serviced and sanitized vehicles' },
    { title: 'Flexible Cancellations', desc: 'Full refund up to 24h before trip' },
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Why Choose TravelEase</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {perks.map((p, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm text-center">
            <h3 className="font-semibold text-slate-800 text-base mb-2">{p.title}</h3>
            <p className="text-xs text-slate-500">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
