import React from 'react';
import { Github, Linkedin, Twitter, MessageSquare, Mail, Globe, Heart, ArrowUp } from 'lucide-react';

/**
 * =============================================================================
 * Footer Component
 * =============================================================================
 * Renders the application footer with social media handles, active hyperlinks,
 * copyright notice, and creator attribution to "Md Jaoyad SWE".
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Social media handle configuration with icons and hyperlinks
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Mo-Jawad",
      icon: Github,
      color: "hover:text-yellow-400 hover:border-yellow-400/50"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/md-jaoyad/",
      icon: Linkedin,
      color: "hover:text-cyan-400 hover:border-cyan-400/50"
    },
    {
      name: "Twitter / X",
      url: "https://x.com/JaoyadCode",
      icon: Twitter,
      color: "hover:text-blue-400 hover:border-blue-400/50"
    },
    {
      name: "Portfolio",
      url: "https://jaoyaddev.com/",
      icon: Globe,
      color: "hover:text-emerald-400 hover:border-emerald-400/50"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="creator" className="relative border-t border-gray-800/80 bg-[#080C16] text-slate-400 pt-16 pb-12">
      
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-24 bg-yellow-400/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          
          {/* Col 1: Brand & Creator Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🐍</span>
              <span className="text-xl font-bold tracking-tight text-white">
                Py-Learn-HTML
              </span>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              An open, zero-database educational platform dedicated to teaching Python through clean, standalone, high-performance HTML interactive modules.
            </p>

            {/* Creator Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-900 border border-gray-800 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
              <span>Architected & Engineered by:</span>
              <strong className="text-yellow-400 font-bold tracking-wide">Md Jaoyad SWE</strong>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#courses" className="hover:text-yellow-400 transition">
                  Python Modules
                </a>
              </li>
              <li>
                <a href="#terminal-demo" className="hover:text-yellow-400 transition">
                  Interactive Terminal
                </a>
              </li>
              <li>
                <a href="/py-html/programming_basics.html" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
                  Module 01: Programming Basics
                </a>
              </li>
              <li>
                <a href="/py-html/oop_python.html" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition">
                  Module 05: Object-Oriented Python
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Social Media Handles */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-200">
              Connect with Creator
            </h4>
            <p className="text-xs text-slate-400">
              Follow and collaborate with <span className="text-yellow-300 font-semibold">Md Jaoyad SWE</span>:
            </p>
            
            {/* Social Icons with Hyperlinks */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`w-9 h-9 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-slate-400 transition-all duration-200 hover:scale-110 shadow-sm ${social.color}`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Scroll-To-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          
          <div className="flex items-center gap-1.5">
            <span>© {currentYear} Py-Learn-HTML. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> by <span className="text-slate-300 font-semibold">Md Jaoyad SWE</span>
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-900 border border-gray-800 hover:border-yellow-400/50 hover:text-white transition text-slate-400"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-yellow-400" />
          </button>

        </div>

      </div>
    </footer>
  );
}
