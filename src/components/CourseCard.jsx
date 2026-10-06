import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

/**
 * CourseCard — flat card with a hairline border.
 * On hover the border brightens and a high-contrast "Open" button fades in;
 * clicking it opens the module's HTML file in a new tab.
 *
 * @param {Object} course - item from courses.js
 * @param {number} index  - used for a light staggered entrance
 */
export default function CourseCard({ course, index = 0 }) {
  const num = String(course.moduleNumber ?? index + 1).padStart(2, '0');

  const handleOpen = (e) => {
    e?.stopPropagation();
    window.open(course.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: Math.min((index % 3) * 0.06, 0.18) }}
      className="group relative flex flex-col justify-between min-h-[200px] p-6 rounded-lg border border-line bg-surface hover:border-neutral-600 transition-colors duration-300"
    >
      <div>
        {/* Number + category */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-neutral-500">{num}</span>
          <span className="label">{course.category}</span>
        </div>

        {/* Title + description */}
        <h3 className="mt-6 text-lg font-medium tracking-tight text-white">{course.title}</h3>
        <p className="mt-2 text-sm text-neutral-500 leading-relaxed line-clamp-2">
          {course.description}
        </p>
      </div>

      {/* Footer: meta + Open button (revealed on hover) */}
      <div className="mt-6 flex items-center justify-between">
        <span className="font-mono text-xs text-neutral-600">
          {course.level} · {course.duration}
        </span>

        <button
          onClick={handleOpen}
          className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-md bg-white text-black text-sm font-medium
                     opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
                     focus-visible:opacity-100 focus-visible:translate-y-0
                     hover:bg-accent transition-all duration-300 ease-out"
          aria-label={`Open ${course.title} in a new tab`}
        >
          Open <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </motion.article>
  );
}
