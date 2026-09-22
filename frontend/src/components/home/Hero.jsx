import React from 'react';
import SearchBox from './SearchBox';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50/80 to-white pt-16 pb-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block py-1 px-3 bg-blue-100 text-blue-700 rounded-full text-xs font-bold tracking-wide uppercase mb-4">
          Discover The World Your Way
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Explore Seamless Travel, Self Drive & Stays
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Rent pristine self-drive cars, book verified tour packages, and discover unique local activities.
        </p>
        <div className="mt-10">
          <SearchBox />
        </div>
      </div>
    </section>
  );
}
