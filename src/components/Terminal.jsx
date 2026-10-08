import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronDown, Terminal as TerminalIcon, CheckCircle2 } from 'lucide-react';

// Smooth cubic easing for accordion open/close transition
const ease = [0.22, 1, 0.36, 1];

/**
 * Terminal — Interactive code window featuring an accordion-style collapsible
 * output drawer.
 *
 * Clicking the 'Run ▸' / 'Hide output' button (or the accordion bar) smoothly
 * expands and collapses the terminal execution output with animated height transitions.
 */
export default function Terminal() {
  const [isOpen, setIsOpen] = useState(true);
  const [isRunning, setIsRunning] = useState(false);

  // Accordion toggle handler with micro-interaction feedback
  const handleToggle = () => {
    if (!isOpen) {
      // Trigger a brief simulated execution state before expanding the drawer
      setIsRunning(true);
      setTimeout(() => {
        setIsRunning(false);
        setIsOpen(true);
      }, 200);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div
      id="terminal-demo"
      className="w-full max-w-md rounded-lg border border-line bg-surface overflow-hidden font-mono text-[13px] shadow-2xl transition-all hover:border-neutral-700"
    >
      {/* Title bar: macOS dots, filename, and primary accordion toggle */}
      <div className="flex items-center justify-between px-4 h-10 border-b border-line bg-neutral-950/70 select-none">
        <div className="flex items-center gap-2">
          {/* Decorative terminal controls */}
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70 inline-block" />
          </div>
          <span className="ml-2 text-neutral-400 text-xs flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-neutral-500" />
            welcome.py
          </span>
        </div>

        {/* Primary Run / Accordion Toggle Button */}
        <button
          type="button"
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-controls="terminal-output-drawer"
          title={isOpen ? 'Click to collapse output accordion' : 'Click to run code & open output accordion'}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs text-neutral-300 hover:text-white hover:bg-neutral-800/80 transition-all border border-transparent hover:border-line"
        >
          {isRunning ? (
            <span className="inline-flex items-center gap-1.5 text-accent font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
              Running...
            </span>
          ) : isOpen ? (
            <>
              <span className="text-neutral-400">Hide output</span>
              <motion.span
                animate={{ rotate: 180 }}
                transition={{ duration: 0.25, ease }}
                className="inline-flex"
              >
                <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
              </motion.span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 text-accent fill-accent" />
              <span className="text-white font-medium">Run ▸</span>
            </>
          )}
        </button>
      </div>

      {/* Python Code Body */}
      <pre className="px-4 py-4 leading-relaxed text-neutral-300 overflow-x-auto bg-neutral-950/30">
<span className="text-neutral-600"># Welcome to Py-Learn-HTML</span>{'\n'}
<span className="text-neutral-400">name</span> = <span className="text-accent">"Md Jaoyad SWE"</span>{'\n'}
{'\n'}
<span className="text-neutral-400">print</span>(<span className="text-accent">f"Hello, learner 👋"</span>){'\n'}
<span className="text-neutral-400">print</span>(<span className="text-accent">f"Built by {'{'}name{'}'}"</span>)
      </pre>

      {/* Interactive Accordion Bar between code and drawer */}
      <button
        type="button"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls="terminal-output-drawer"
        className="w-full flex items-center justify-between px-4 py-1.5 border-t border-line bg-neutral-900/50 hover:bg-neutral-900/90 transition-colors text-[11px] text-neutral-400 focus:outline-none"
      >
        <span className="flex items-center gap-2 font-mono">
          <span
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              isOpen ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]' : 'bg-neutral-600'
            }`}
          />
          Terminal Output
          <span className="text-[10px] text-neutral-500">
            {isOpen ? '(click to collapse)' : '(click to expand)'}
          </span>
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease }}
          className="inline-flex"
        >
          <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
        </motion.div>
      </button>

      {/* Accordion Collapsible Output Drawer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id="terminal-output-drawer"
            key="terminal-output"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="overflow-hidden border-t border-line/60 bg-black/60"
          >
            <div className="px-4 py-3 text-neutral-300">
              <div className="flex items-center justify-between mb-1.5">
                <p className="label text-[10px] text-accent tracking-wider">Output Result</p>
                <span className="text-[10px] text-emerald-400/90 font-mono inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  Exit code 0
                </span>
              </div>
              <p className="text-emerald-400 font-medium">Hello, learner 👋</p>
              <p className="text-neutral-300">Built by Md Jaoyad SWE</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
