import React from 'react';
import clsx from 'clsx';

/**
 * Glow — decorative blurred "backdrop light" blob.
 * Absolutely positioned, non-interactive, and hidden from assistive tech.
 * The parent must be `relative` (and ideally `overflow-hidden`/clipped).
 *
 * @param {string} className - positioning/size utilities (e.g. "-top-20 left-0 w-96 h-96")
 * @param {'accent'|'blue'|'violet'} tone - colour preset
 */
const TONES = {
  accent: 'bg-accent/20',
  blue: 'bg-sky-500/15',
  violet: 'bg-violet-500/15',
};

export default function Glow({ className = '', tone = 'accent' }) {
  return (
    <div
      aria-hidden="true"
      className={clsx(
        'glow pointer-events-none absolute -z-10 rounded-full blur-[120px]',
        TONES[tone],
        className
      )}
    />
  );
}
