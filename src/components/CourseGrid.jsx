import React, { useState, useMemo, useRef } from 'react';
import { Search, X, SlidersHorizontal, BookOpen } from 'lucide-react';
import CourseCard from './CourseCard';
import pythonCourses from '../data/courses';

/**
 * CourseGrid — Responsive curriculum module catalog.
 *
 * Mobile-friendly improvements:
 * - Horizontally swipeable pill tab carousel with no-scrollbar and touch-friendly padding.
 * - Tab count badges (e.g. "All (23)", "Basics (4)") for quick overview.
 * - Icon-assisted search field with clear ('X') button and live count.
 * - Graceful empty state with 1-click filter reset.
 */
export default function CourseGrid() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const tabsContainerRef = useRef(null);

  // Compute categories and the count of courses in each category
  const { categories, categoryCounts } = useMemo(() => {
    const counts = { All: pythonCourses.length };
    const cats = ['All'];

    pythonCourses.forEach((c) => {
      counts[c.category] = (counts[c.category] || 0) + 1;
      if (!cats.includes(c.category)) {
        cats.push(c.category);
      }
    });

    return { categories: cats, categoryCounts: counts };
  }, []);

  // Filter modules based on active category and search term
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

  const handleResetFilters = () => {
    setCategory('All');
    setQuery('');
  };

  return (
    <section id="courses" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 scroll-mt-20">
      {/* Heading + Search Bar (Stacks nicely on mobile) */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 sm:gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="label">Curriculum</span>
            <span className="text-neutral-600 text-xs">/</span>
            <span className="text-xs font-mono text-accent">
              {filtered.length} {filtered.length === 1 ? 'lesson' : 'lessons'}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white">
            Interactive Modules
          </h2>
        </div>

        {/* Search input with icons */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search topics, syntax, OOP..."
            className="w-full bg-surface/90 border border-line focus:border-accent/60 rounded-lg pl-10 pr-9 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition-all shadow-sm focus:ring-1 focus:ring-accent/40"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs: Horizontally swipeable on mobile, wraps on larger screens */}
      <div className="mt-6 sm:mt-8 relative">
        <div
          ref={tabsContainerRef}
          role="tablist"
          aria-label="Module categories"
          className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1.5 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap"
        >
          {categories.map((c) => {
            const isActive = category === c;
            const count = categoryCounts[c] || 0;
            return (
              <button
                key={c}
                role="tab"
                aria-selected={isActive}
                onClick={() => setCategory(c)}
                className={`flex items-center gap-2 shrink-0 px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all select-none ${
                  isActive
                    ? 'bg-accent text-black font-semibold shadow-[0_0_15px_-3px_rgba(250,204,21,0.4)] scale-[1.02]'
                    : 'bg-surface/90 border border-line text-neutral-400 hover:text-white hover:border-neutral-600 active:scale-95'
                }`}
              >
                <span>{c}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-black/15 text-black' : 'bg-white/5 text-neutral-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Course Cards */}
      {filtered.length > 0 ? (
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>
      ) : (
        /* Empty State with reset button */
        <div className="mt-14 p-8 rounded-xl border border-dashed border-line text-center max-w-md mx-auto space-y-3">
          <BookOpen className="w-8 h-8 text-neutral-600 mx-auto" />
          <p className="text-white font-medium text-sm">No modules match your search.</p>
          <p className="text-xs text-neutral-500">
            Try adjusting your search query or selecting a different category tab.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-white/10 hover:bg-white text-neutral-200 hover:text-black text-xs font-semibold transition-all"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Reset Filters
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
