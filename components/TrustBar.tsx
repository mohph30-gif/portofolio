import React from 'react';
import { TRUST_POINTS } from '../content/site';

export default function TrustBar() {
  return (
    <section className="px-4 py-6 md:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 rounded-[1.75rem] border border-slate-200 bg-white px-6 py-5 md:flex-row md:items-center md:justify-between">
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Trusted delivery signals</span>
        <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:justify-end">
          {TRUST_POINTS.map((point) => (
            <span key={point} className="rounded-full bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
              {point}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
