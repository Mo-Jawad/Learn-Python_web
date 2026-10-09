import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, BookOpen, Target, GitFork, Mail, User } from 'lucide-react';

/**
 * Navbar — Senior-level responsive navigation header.
 *
 * Mobile navigation architecture:
 * - Nav drawer is positioned absolute over page content (top-full), preventing sticky header layout reflows.
 * - Uses native scrollIntoView({ behavior: 'smooth', block: 'start' }) paired with CSS scroll-mt-20.
 * - Handles both mobile touch tap events and desktop clicks reliably.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Auto-close mobile drawer on desktop viewport expansion
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Keyboard accessibility: Dismiss mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const navLinks = [
    { label: 'Goals', href: '#goals', icon: Target },
    { label: 'Workflow', href: '#workflow', icon: GitFork },
    { label: 'Modules', href: '#courses', icon: BookOpen },
    { label: 'Contact', href: '#contact', icon: Mail },
    { label: 'About', href: '#creator', icon: User },
  ];

  /**
   * Resilient section navigation that works seamlessly on mobile devices.
   */
  const handleNavClick = useCallback((e, href) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    // Close the drawer
    setIsOpen(false);

    if (href === '#' || href === '') {
      const root = document.getElementById('root') || document.body;
      if (root) {
        root.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Small timeout ensures touch event lifecycle finishes before scroll initiates
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);

      // Update URL hash without causing an instant layout jump
      if (window.history.pushState) {
        window.history.pushState(null, '', href);
      }
    } else {
      window.location.hash = href;
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between relative z-50">
        {/* Wordmark & Brand Logo */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, '#')}
          className="flex items-center gap-2.5 text-sm sm:text-base font-semibold tracking-tight text-white group cursor-pointer"
        >
          <img
            src="/logo.webp"
            alt="Py-Learn-HTML Logo"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-md object-contain shadow-sm transition-transform group-hover:scale-105 pointer-events-none"
          />
          <span className="font-semibold tracking-tight pointer-events-none">Py-Learn-HTML</span>
        </a>

        {/* Desktop Navigation Links (>= md screen) */}
        <nav className="hidden md:flex items-center gap-7 text-sm text-neutral-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-white transition-colors duration-150 py-1 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#courses"
            onClick={(e) => handleNavClick(e, '#courses')}
            className="px-3.5 py-1.5 rounded-md bg-white/10 hover:bg-accent hover:text-black text-white text-xs font-medium transition-all cursor-pointer"
          >
            Start Learning
          </a>
        </nav>

        {/* Mobile Hamburger Toggle Button (< md screen) */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg text-neutral-300 hover:text-white hover:bg-white/5 active:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close-icon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="w-5 h-5 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="menu-icon"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Menu className="w-5 h-5 text-neutral-300" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Dimmer: Tap to dismiss */}
            <motion.div
              key="mobile-nav-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 top-16 bg-black/60 backdrop-blur-xs z-30"
              aria-hidden="true"
            />

            {/* Dropdown Menu Sheet */}
            <motion.div
              key="mobile-nav-drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden absolute top-full left-0 right-0 w-full border-b border-line bg-[#0E0E0E] backdrop-blur-2xl overflow-hidden shadow-2xl z-50 pointer-events-auto"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className="flex items-center justify-between px-3.5 py-3 rounded-lg text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 active:bg-white/10 transition-colors cursor-pointer select-none"
                  >
                    <span className="flex items-center gap-3 pointer-events-none">
                      <Icon className="w-4 h-4 text-accent shrink-0" />
                      <span>{label}</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-neutral-500 pointer-events-none" />
                  </a>
                ))}

                <div className="pt-3 pb-1">
                  <a
                    href="#courses"
                    onClick={(e) => handleNavClick(e, '#courses')}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-accent text-black font-semibold text-sm hover:brightness-105 active:scale-[0.99] transition-all shadow-md cursor-pointer select-none"
                  >
                    <BookOpen className="w-4 h-4 shrink-0 pointer-events-none" />
                    <span className="pointer-events-none">Browse All Modules</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
