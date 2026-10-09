import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

/**
 * CourseCard — Responsive lesson card.
 *
 * Mobile-friendly improvements:
 * - Entire card is clickable for effortless tapping on touchscreens.
 * - "Open" button is visible on mobile/touch screens by default, and reveals on hover on desktop.
 * - High-contrast indicators and responsive typography.
 *
 * @param {Object} course - item from courses.js
 * @param {number} index  - used for staggered entrance
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
      onClick={handleOpen}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpen(e);
        }
      }}
      className="group relative flex flex-col justify-between min-h-[190px] p-5 sm:p-6 rounded-xl border border-line bg-surface hover:border-accent/40 active:border-accent/70 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] cursor-pointer transition-all duration-300"
    >
      <div>
        {/* Module Number + Category badge */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-neutral-500 font-medium">{num}</span>
          <span className="label text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-white/5 text-neutral-400 border border-line/60">
            {course.category}
          </span>
        </div>

        {/* Title + Description */}
        <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-medium tracking-tight text-white group-hover:text-accent transition-colors">
          {course.title}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-2">
          {course.description}
        </p>
      </div>

      {/* Footer: Level/Duration + Open Button */}
      <div className="mt-6 pt-3 border-t border-line/50 flex items-center justify-between">
        <span className="font-mono text-[11px] sm:text-xs text-neutral-500">
          {course.level} · {course.duration}
        </span>

        {/* Action button: Visible by default on touch screens, fades in on hover for desktop */}
        <button
          type="button"
          onClick={handleOpen}
          aria-label={`Open ${course.title} in a new tab`}
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-white text-black text-xs sm:text-sm font-semibold
                     opacity-100 translate-y-0 sm:opacity-0 sm:translate-y-1 sm:group-hover:opacity-100 sm:group-hover:translate-y-0
                     focus-visible:opacity-100 focus-visible:translate-y-0
                     group-hover:bg-accent transition-all duration-200 ease-out shadow-sm"
        >
          <span>Open</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.article>
  );
}
