import React from 'react';
import { Sparkles, ArrowRight, Terminal as TerminalIcon, ShieldCheck, Flame, BookOpen, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import Terminal from './Terminal';

/**
 * =============================================================================
 * Hero Component
 * =============================================================================
 * Contrasting, animated hero section with:
 * - Tagline "Learn Python with new Experience"
 * - Staggered spring animations
 * - Simplified and elegant live Python Terminal UI on the right
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-yellow-500/15 to-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-12 right-12 w-64 h-64 bg-yellow-400/10 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content & Tagline */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-blue-500/10 border border-yellow-500/30 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-yellow-300 font-mono">
                23 Comprehensive HTML Modules
              </span>
            </div>

            {/* Main Title & Tagline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Master Code with{' '}
                <span className="bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 bg-clip-text text-transparent decoration-yellow-400/40 decoration-wavy decoration-2">
                  Py-Learn-HTML
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-300 to-emerald-300 bg-clip-text text-transparent">
                "Learn Python with new Experience"
              </p>
            </div>

            {/* Sub-text Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Interactive, standalone, beautifully styled HTML tutorials. No delay, 
              hands-on visual sketches, and high-contrast card exploration crafted by{' '}
              <strong className="text-yellow-400 font-semibold">Md Jaoyad SWE</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#courses"
                className="group px-6 py-3.5 text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400 hover:from-yellow-300 hover:to-amber-300 rounded-xl shadow-xl shadow-yellow-400/25 hover:shadow-yellow-400/40 transition-all flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-5 h-5 text-slate-950" />
                <span>Explore 23 Modules</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#terminal-demo"
                className="px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-200 bg-gray-900/90 hover:bg-gray-800 border border-gray-700/80 hover:border-yellow-400/60 rounded-xl transition-all backdrop-blur-md flex items-center gap-2 cursor-pointer"
              >
                <TerminalIcon className="w-5 h-5 text-yellow-400" />
                <span>Try Terminal</span>
              </motion.a>
            </div>

            {/* Feature Highlights Bar */}
            <div className="pt-4 border-t border-gray-800/80 grid grid-cols-3 gap-3 text-left max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-400">Standalone HTML</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs text-slate-400">Fast & Zero DB</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-400 shrink-0" />
                <span className="text-xs text-slate-400">Smooth Motion</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Simplified, Sleek Terminal UI */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.15 }}
            className="lg:col-span-6 flex justify-center w-full"
          >
            <Terminal />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
