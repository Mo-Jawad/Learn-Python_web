import React from 'react';
import { Github, Linkedin, Twitter, Globe, ArrowUp } from 'lucide-react';

/**
 * Footer — Responsive footer with working Back to Top and section quick navigation.
 */
export default function Footer() {
  const socials = [
    { name: 'GitHub', url: 'https://github.com/Mo-Jawad', icon: Github },
    { name: 'LinkedIn', url: 'https://linkedin.com/', icon: Linkedin },
    { name: 'X / Twitter', url: 'https://x.com/JaoyadCode', icon: Twitter },
    { name: 'Portfolio', url: 'https://jaoyaddev.com/', icon: Globe },
  ];

  const quickLinks = [
    { label: 'Goals', href: '#goals' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Modules', href: '#courses' },
    { label: 'Contact', href: '#contact' },
  ];

  /**
   * Resilient Back to Top function that works across all desktop and mobile browsers.
   */
  const scrollToTop = () => {
    const root = document.getElementById('root') || document.body;
    if (root) {
      root.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * Smoothly navigates to target section with scroll-mt offset.
   */
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (window.history.pushState) {
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <footer id="creator" className="border-t border-line bg-surface/30 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Tier 1: Brand Info & Quick Links */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-10">
          {/* Brand info */}
          <div className="space-y-3 max-w-sm">
            <div className="flex items-center gap-3">
              <img
                src="/logo.webp"
                alt="Py-Learn-HTML Logo"
                className="w-8 h-8 rounded-lg object-contain shadow-sm"
              />
              <span className="text-base font-semibold text-white tracking-tight">
                Py-Learn-HTML
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Visual, hand-drawn style Python lessons that open directly in your browser. No databases, no logins — pure standalone knowledge.
            </p>
          </div>

          {/* Quick links & Back to Top */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-5 sm:gap-6 text-sm text-neutral-400">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-white transition-colors duration-150 py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface border border-line text-xs font-medium text-neutral-300 hover:text-white hover:border-neutral-600 active:scale-95 transition-all cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5 text-accent" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Tier 2: Copyright & Social Links */}
        <div className="pt-8 border-t border-line/60 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-neutral-500">
            © {new Date().getFullYear()} Py-Learn-HTML · Created by{' '}
            <span className="text-white font-medium">Md Jaoyad SWE</span>
          </p>

          {/* Social Links with touch-friendly dimensions */}
          <div className="flex items-center gap-3">
            {socials.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="w-10 h-10 rounded-full bg-surface border border-line/80 hover:border-accent hover:text-accent text-neutral-400 flex items-center justify-center transition-all duration-200 active:scale-95 shadow-sm"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
