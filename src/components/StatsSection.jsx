import React from 'react';
import pythonCourses from '../data/courses';

/**
 * StatsSection — a thin, quiet row of three facts separated by hairlines.
 */
export default function StatsSection() {
  const stats = [
    { value: String(pythonCourses.length), label: 'Modules' },
    { value: '0', label: 'Databases' },
    { value: '100%', label: 'Standalone HTML' },
  ];

  return (
    <section className="border-y border-line">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 divide-x divide-line">
        {stats.map((s) => (
          <div key={s.label} className="py-8 px-4 first:pl-0">
            <p className="text-3xl font-light tracking-tight text-white">{s.value}</p>
            <p className="label mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
