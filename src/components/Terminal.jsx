import React, { useState } from 'react';

/**
 * Terminal — flat, quiet code window with a welcome message written in Python.
 * "Run" toggles the output panel.
 */
export default function Terminal() {
  const [ran, setRan] = useState(true);

  return (
    <div
      id="terminal-demo"
      className="w-full max-w-md rounded-lg border border-line bg-surface overflow-hidden font-mono text-[13px]"
    >
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 h-10 border-b border-line">
        <span className="text-neutral-500 text-xs">welcome.py</span>
        <button
          onClick={() => setRan((v) => !v)}
          className="text-xs text-neutral-400 hover:text-white transition-colors"
        >
          {ran ? 'Hide output' : 'Run ▸'}
        </button>
      </div>

      {/* Code */}
      <pre className="px-4 py-4 leading-relaxed text-neutral-300 overflow-x-auto">
<span className="text-neutral-600"># Welcome to Py-Learn-HTML</span>{'\n'}
<span className="text-neutral-400">name</span> = <span className="text-accent">"Md Jaoyad SWE"</span>{'\n'}
{'\n'}
<span className="text-neutral-400">print</span>(<span className="text-accent">f"Hello, learner 👋"</span>){'\n'}
<span className="text-neutral-400">print</span>(<span className="text-accent">f"Built by {'{'}name{'}'}"</span>)
      </pre>

      {/* Output */}
      {ran && (
        <div className="px-4 py-3 border-t border-line text-neutral-400">
          <p className="label mb-1.5">Output</p>
          <p>Hello, learner 👋</p>
          <p>Built by Md Jaoyad SWE</p>
        </div>
      )}
    </div>
  );
}
