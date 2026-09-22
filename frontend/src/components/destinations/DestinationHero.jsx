import React from 'react';

export default function DestinationHero({ title = 'Explore Paris', subtitle = 'The City of Lights' }) {
  return (
    <div className="relative h-96 rounded-3xl bg-slate-800 text-white flex flex-col justify-end p-8 sm:p-12 mb-8">
      <h1 className="text-4xl font-extrabold">{title}</h1>
      <p className="text-slate-300 mt-2">{subtitle}</p>
    </div>
  );
}
