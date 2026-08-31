import React, { useState } from 'react';
import { Play, Copy, Check, Terminal as TerminalIcon } from 'lucide-react';

/**
 * =============================================================================
 * Terminal Component (Simplified & Sleek)
 * =============================================================================
 * A clean, minimalist developer terminal with simple readable Python code
 * and an interactive 'Run' simulation delivering the welcoming message.
 */
export default function Terminal() {
  const [copied, setCopied] = useState(false);
  const [hasRun, setHasRun] = useState(true);
  const [running, setRunning] = useState(false);

  const pythonCode = `# Welcome to Py-Learn-HTML
author = "Md Jaoyad SWE"
tagline = "Learn Python with new Experience"
modules_count = 23

print(f"🚀 {tagline}")
print(f"✨ Created with ❤️ by {author}")
print(f"📚 {modules_count} visual interactive modules ready!")`;

  const handleCopy = () => {
    navigator.clipboard.writeText(pythonCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setRunning(true);
    setTimeout(() => {
      setRunning(false);
      setHasRun(true);
    }, 300);
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-xl overflow-hidden border border-gray-800 bg-[#0B0F19] shadow-2xl shadow-yellow-500/5 transition-all duration-300 hover:border-yellow-400/40">
      
      {/* Sleek Minimal Header */}
      <div className="bg-[#111827] px-4 py-2.5 border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className="text-xs font-mono text-slate-400 ml-1.5 flex items-center gap-1">
            <TerminalIcon className="w-3 h-3 text-yellow-400" />
            main.py
          </span>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-gray-800 transition text-xs flex items-center gap-1"
            title="Copy Code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
          
          <button
            onClick={handleRun}
            disabled={running}
            className="flex items-center gap-1 px-3 py-1 rounded-md text-xs font-bold bg-yellow-400 text-slate-950 hover:bg-yellow-300 transition active:scale-95 cursor-pointer shadow-sm"
          >
            <Play className={`w-3 h-3 fill-current ${running ? 'animate-spin' : ''}`} />
            <span>{running ? 'Running' : 'Run'}</span>
          </button>
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-slate-200 leading-relaxed overflow-x-auto bg-[#080C14]">
        <p className="text-slate-500"># Welcome to Py-Learn-HTML</p>
        <p>
          <span className="text-cyan-400">author</span> = <span className="text-emerald-300">"Md Jaoyad SWE"</span>
        </p>
        <p>
          <span className="text-cyan-400">tagline</span> = <span className="text-emerald-300">"Learn Python with new Experience"</span>
        </p>
        <p>
          <span className="text-cyan-400">modules_count</span> = <span className="text-yellow-400">23</span>
        </p>
        <p className="h-2"></p>
        <p>
          <span className="text-purple-400">print</span>(<span className="text-emerald-300">f"🚀 &#123;tagline&#125;"</span>)
        </p>
        <p>
          <span className="text-purple-400">print</span>(<span className="text-emerald-300">f"✨ Created with ❤️ by &#123;author&#125;"</span>)
        </p>
        <p>
          <span className="text-purple-400">print</span>(<span className="text-emerald-300">f"📚 &#123;modules_count&#125; visual interactive modules ready!"</span>)
        </p>
      </div>

      {/* Output Console */}
      {hasRun && (
        <div className="border-t border-gray-800/80 bg-[#06090F] p-4 font-mono text-xs text-emerald-400">
          <div className="text-slate-500 text-[10px] mb-1.5 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Output</span>
          </div>
          <div className="space-y-0.5">
            <p className="text-white font-medium">🚀 Learn Python with new Experience</p>
            <p className="text-yellow-300">✨ Created with ❤️ by Md Jaoyad SWE</p>
            <p className="text-emerald-400 font-semibold">📚 23 visual interactive modules ready!</p>
          </div>
        </div>
      )}

    </div>
  );
}
