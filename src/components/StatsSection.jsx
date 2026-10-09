import React from 'react';
import pythonCourses from '../data/courses';

/**
 * StatsSection — A quiet row of three facts, responsive across mobile and desktop.
 */
export default function StatsSection() {
  const stats = [
    { value: String(pythonCourses.length), label: 'Modules' },
    { value: '0', label: 'Databases' },
    { value: '100%', label: 'Standalone HTML' },
  ];

  return (
    <section className="border-y border-line bg-surface/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-3 divide-x divide-line">
        {stats.map((s) => (
          <div key={s.label} className="py-6 sm:py-8 px-2 sm:px-4 first:pl-0 text-center sm:text-left">
            <p className="text-xl sm:text-3xl font-light tracking-tight text-white">{s.value}</p>
            <p className="label mt-1 sm:mt-2 text-[10px] sm:text-[11px] truncate">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
