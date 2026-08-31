import React, { useState, useMemo } from 'react';
import { Search, Filter, Sparkles, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CourseCard from './CourseCard';
import pythonCourses from '../data/courses';

/**
 * =============================================================================
 * CourseGrid Component
 * =============================================================================
 * Renders all 23 Python learning modules with smooth category tabs,
 * instant search filtering, module counter badges, and responsive grid layout.
 */
export default function CourseGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique categories
  const categories = [
    'All',
    'Basics',
    'Control & Input',
    'Functions & Structure',
    'Data Structures',
    'OOP',
    'Reliability',
    'Advanced'
  ];

  // Calculate filtered results
  const filteredCourses = useMemo(() => {
    return pythonCourses.filter((course) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        course.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        (selectedCategory === 'Basics' && course.category === 'Basics') ||
        (selectedCategory === 'Control & Input' && course.category === 'Control & Input') ||
        (selectedCategory === 'OOP' && course.category === 'OOP') ||
        (selectedCategory === 'Reliability' && course.category === 'Reliability');

      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.file.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (course.topics && course.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="courses" className="py-16 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gray-800/80">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-yellow-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INTERACTIVE PYTHON CURRICULUM</span>
            </div>
            
            <div className="flex items-center gap-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Curated Python Modules
              </h2>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-yellow-400/10 text-yellow-300 border border-yellow-400/30">
                {pythonCourses.length} Modules Total
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
              Hover over any card and click <strong className="text-yellow-400 font-semibold">"Open"</strong> to launch the dedicated interactive HTML tutorial in a new tab.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by topic, keyword, or module..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#0F1423] border border-gray-800 focus:border-yellow-400/80 rounded-xl text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition backdrop-blur-md shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center justify-between gap-4 pt-6 pb-2 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              const count = cat === 'All' 
                ? pythonCourses.length 
                : pythonCourses.filter(c => c.category === cat || c.category.includes(cat)).length;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-yellow-400 text-slate-950 font-bold shadow-md shadow-yellow-400/20 scale-105'
                      : 'bg-gray-900/70 text-slate-400 hover:text-white hover:bg-gray-800 border border-gray-800'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${isActive ? 'bg-slate-950/20 text-slate-950' : 'bg-gray-800 text-slate-400'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <span className="hidden sm:inline-block text-xs font-mono text-slate-400 whitespace-nowrap">
            Showing <strong className="text-white">{filteredCourses.length}</strong> of {pythonCourses.length}
          </span>
        </div>

      </div>

      {/* Grid of Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredCourses.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
          >
            <AnimatePresence>
              {filteredCourses.map((course, idx) => (
                <CourseCard key={course.id || course.file} course={course} index={idx} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-16 px-4 bg-gray-900/40 rounded-2xl border border-gray-800">
            <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <p className="text-base font-semibold text-slate-300">No matching Python modules found</p>
            <p className="text-xs text-slate-500 mt-1">Try searching for terms like 'Loops', 'Variables', 'OOP', or 'JSON'.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 text-xs font-bold bg-yellow-400 text-slate-950 rounded-lg hover:bg-yellow-300 transition cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

    </section>
  );
}
