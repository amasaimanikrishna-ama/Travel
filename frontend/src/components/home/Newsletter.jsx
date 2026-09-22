import React from 'react';

export default function Newsletter() {
  return (
    <section className="py-16 max-w-5xl mx-auto px-4 text-center">
      <div className="bg-blue-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
        <h2 className="text-3xl font-bold">Get Exclusive Travel Deals</h2>
        <p className="mt-2 text-blue-100 text-sm max-w-md mx-auto">
          Subscribe to get insider discounts, latest cars, and secret vacation getaways.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-xl text-slate-900 bg-white placeholder-slate-400 focus:outline-none"
          />
          <button className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3 rounded-xl transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
