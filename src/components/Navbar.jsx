import React from 'react';
import { Terminal, Sparkles, BookOpen, ExternalLink, Github } from 'lucide-react';

/**
 * =============================================================================
 * Navbar Component
 * =============================================================================
 * Renders the sticky top navigation with platform branding and quick links.
 */
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800/80 bg-[#0B0F19]/85 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Tag */}
        <div className="flex items-center gap-3">
          <a 
            href="#" 
            className="group flex items-center gap-2.5 font-extrabold text-xl tracking-tight text-white hover:opacity-95 transition"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-yellow-400 to-yellow-300 p-[1.5px] shadow-lg shadow-yellow-500/10 group-hover:shadow-yellow-500/25 transition">
              <div className="w-full h-full bg-[#0B0F19] rounded-[10px] flex items-center justify-center text-lg">
                🐍
              </div>
            </div>
            <span className="bg-gradient-to-r from-yellow-300 to-amber-200 bg-clip-text text-transparent">
              Py-Learn-HTML
            </span>
          </a>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <Sparkles className="w-3 h-3 text-yellow-400" />
            Interactive v1.0
          </span>
        </div>

        {/* Navigation Items */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#courses" className="hover:text-yellow-400 transition flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-slate-400" />
            Modules
          </a>
          <a href="#terminal-demo" className="hover:text-yellow-400 transition flex items-center gap-1.5">
            <Terminal className="w-4 h-4 text-slate-400" />
            Python Terminal
          </a>
          <a href="#creator" className="hover:text-yellow-400 transition">
            Creator
          </a>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href="#courses"
            className="px-4 py-2 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-yellow-400 to-amber-300 hover:from-yellow-300 hover:to-amber-200 rounded-lg shadow-md shadow-yellow-400/20 hover:shadow-yellow-400/30 transition transform active:scale-95"
          >
            Start Learning
          </a>
        </div>

      </div>
    </header>
  );
}
