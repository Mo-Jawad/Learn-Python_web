import React, { useState, useMemo } from 'react';
import CourseCard from './CourseCard';
import pythonCourses from '../data/courses';

/**
 * CourseGrid — section heading, a plain-text search, simple category tabs, and the card grid.
 */
export default function CourseGrid() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');

  // Build the tab list from the data so it never goes out of sync
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(pythonCourses.map((c) => c.category)))],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return pythonCourses.filter((c) => {
      const inCategory = category === 'All' || c.category === category;
      const inSearch =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.topics?.some((t) => t.toLowerCase().includes(q));
      return inCategory && inSearch;
    });
  }, [category, query]);

  return (
    <section id="courses" className="max-w-6xl mx-auto px-6 py-24">
      {/* Heading + search */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="label mb-3">Curriculum</p>
          <h2 className="text-3xl font-light tracking-tight text-white">Modules</h2>
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search…"
          className="w-full md:w-64 bg-transparent border-b border-line focus:border-neutral-500 outline-none py-2 text-sm text-white placeholder-neutral-600 transition-colors"
        />
      </div>

      {/* Category tabs */}
      <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`transition-colors ${
              category === c ? 'text-white underline underline-offset-8 decoration-accent' : 'text-neutral-500 hover:text-neutral-300'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-sm text-neutral-500">No modules match your search.</p>
      )}
    </section>
  );
}
