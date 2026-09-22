import React from 'react';
import { useParams } from 'react-router-dom';

export default function ExperienceDetails() {
  const { id } = useParams();
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-900">Experience #{id}</h1>
    </div>
  );
}
