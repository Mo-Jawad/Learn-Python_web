import React from 'react';
import { motion } from 'framer-motion';
import Terminal from './Terminal';
import Glow from './Glow';

// Shared easing for calm, smooth entrances
const ease = [0.22, 1, 0.36, 1];

/**
 * Hero — large light-weight headline, one clear CTA, terminal on the right.
 */
export default function Hero() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 pt-24 pb-28">
      {/* Backdrop lighting behind headline and terminal */}
      <Glow tone="accent" className="top-10 -left-24 w-96 h-96" />
      <Glow tone="blue" className="top-24 right-0 w-96 h-96" />
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="label mb-6">Py-Learn-HTML</p>

          <h1 className="text-5xl sm:text-6xl font-light tracking-tightest leading-[1.05] text-white">
            Learn Python with
            <br />
            <span className="text-accent">new Experience</span>
          </h1>

          <p className="mt-6 max-w-md text-neutral-400 leading-relaxed">
            Visual, hand-drawn style lessons that open in their own tab.
            No sign-up, no database — just pick a module and start.
          </p>

          <a
            href="#courses"
            className="inline-block mt-10 px-5 py-2.5 rounded-md bg-white text-black text-sm font-medium hover:bg-accent transition-colors"
          >
            Browse modules
          </a>
        </motion.div>

        {/* Right: terminal */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.12 }}
        >
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
}

