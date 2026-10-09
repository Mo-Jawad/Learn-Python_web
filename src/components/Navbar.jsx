import React from 'react';

/**
 * Navbar — minimal top bar: wordmark on the left, plain text links on the right.
 */
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Wordmark with Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 text-sm font-medium tracking-tight text-white group">
          <img
            src="/logo.webp"
            alt="Py-Learn-HTML Logo"
            className="w-7 h-7 rounded-md object-contain transition-transform group-hover:scale-105 shadow-sm"
          />
          <span className="font-semibold tracking-tight">Py-Learn-HTML</span>
        </a>

        {/* Links */}
        <nav className="flex items-center gap-6 text-sm text-neutral-400">
          <a href="#goals" className="hover:text-white transition-colors">Goals</a>
          <a href="#workflow" className="hover:text-white transition-colors">Workflow</a>
          <a href="#courses" className="hover:text-white transition-colors">Modules</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="#creator" className="hover:text-white transition-colors">About</a>
        </nav>
      </div>
    </header>
  );
}

