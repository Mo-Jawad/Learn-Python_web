import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, X, ExternalLink } from 'lucide-react';

// HeroUI spring physics for smooth, eye-catching corner entrance
const springTransition = {
  type: 'spring',
  stiffness: 400,
  damping: 30,
};

/**
 * HeroUI Toast Component
 *
 * Modeled after HeroUI's Toast & Notification specification (https://heroui.com/docs/components/toast):
 * - Positioned at bottom-right viewport (fixed bottom-6 right-6 z-50)
 * - Glassmorphic surface with backdrop blur, rounded-2xl geometry, and subtle borders
 * - Status indicators with contextual ambient glow (emerald for success, rose for error)
 * - Interactive dismiss button, hover-pause, and animated auto-dismiss progress bar
 *
 * @param {Object} props
 * @param {Object|null} props.toast - { id, type: 'success'|'error', title, description, actionUrl, actionLabel }
 * @param {Function} props.onClose - Callback fired when toast is dismissed
 * @param {number} props.duration - Auto-dismiss duration in ms (default 5000ms)
 */
export default function Toast({ toast, onClose, duration = 5000 }) {
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!toast) return;

    setProgress(100);
    const startTime = Date.now();
    const interval = 50; // update progress every 50ms

    const timer = setInterval(() => {
      if (isPaused) return;

      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
      setProgress(remaining);

      if (elapsed >= duration) {
        clearInterval(timer);
        onClose();
      }
    }, interval);

    return () => clearInterval(timer);
  }, [toast, isPaused, duration, onClose]);

  return (
    <div
      aria-live="assertive"
      aria-atomic="true"
      className="fixed bottom-6 right-6 z-50 pointer-events-none flex flex-col items-end gap-2 max-w-sm sm:max-w-md w-full px-4 sm:px-0"
    >
      <AnimatePresence mode="wait">
        {toast && (
          <motion.div
            key={toast.id || 'heroui-toast'}
            initial={{ opacity: 0, y: 40, x: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, x: 20, scale: 0.95, transition: { duration: 0.2 } }}
            transition={springTransition}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            role="alert"
            className="pointer-events-auto relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#121214]/90 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all"
          >
            {/* Ambient indicator glow */}
            <div
              aria-hidden="true"
              className={`absolute -top-10 -left-10 h-28 w-28 rounded-full blur-2xl opacity-40 ${
                toast.type === 'success' ? 'bg-emerald-500' : 'bg-rose-500'
              }`}
            />

            <div className="relative flex items-start gap-3.5">
              {/* Status Indicator Icon with HeroUI styled container */}
              <div
                className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${
                  toast.type === 'success'
                    ? 'border-emerald-500/30 bg-emerald-500/15 text-emerald-400'
                    : 'border-rose-500/30 bg-rose-500/15 text-rose-400'
                }`}
              >
                {toast.type === 'success' ? (
                  <CheckCircle2 className="h-5 w-5" strokeWidth={2} />
                ) : (
                  <AlertCircle className="h-5 w-5" strokeWidth={2} />
                )}
              </div>

              {/* Title & Description Body */}
              <div className="flex-1 pr-2">
                <h4 className="text-sm font-semibold tracking-tight text-white">
                  {toast.title}
                </h4>
                {toast.description && (
                  <p className="mt-1 text-xs leading-relaxed text-neutral-300">
                    {toast.description}
                  </p>
                )}

                {/* Optional Action Button (e.g. for mail client fallback) */}
                {toast.actionUrl && (
                  <div className="mt-2.5">
                    <a
                      href={toast.actionUrl}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/20 active:scale-95"
                    >
                      <span>{toast.actionLabel || 'Open Mail Client'}</span>
                      <ExternalLink className="h-3 w-3 text-neutral-400" />
                    </a>
                  </div>
                )}
              </div>

              {/* Dismiss / Close Button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close notification"
                className="shrink-0 rounded-lg p-1 text-neutral-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Auto-dismiss progress countdown line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 overflow-hidden">
              <div
                className={`h-full transition-all duration-75 ${
                  toast.type === 'success' ? 'bg-emerald-400/80' : 'bg-rose-400/80'
                }`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
