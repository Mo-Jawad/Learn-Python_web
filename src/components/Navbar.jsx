import React from 'react';

/**
 * Navbar — minimal top bar: wordmark on the left, plain text links on the right.
 */
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Wordmark */}
        <a href="#" className="flex items-center gap-2 text-sm font-medium tracking-tight text-white">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Py-Learn-HTML
        </a>

        {/* Links */}
        <nav className="flex items-center gap-6 text-sm text-neutral-400">
          <a href="#goals" className="hover:text-white transition-colors">Goals</a>
          <a href="#workflow" className="hover:text-white transition-colors">Workflow</a>
          <a href="#courses" className="hover:text-white transition-colors">Modules</a>
          <a href="#creator" className="hover:text-white transition-colors">About</a>
        </nav>
      </div>
    </header>
  );
}

