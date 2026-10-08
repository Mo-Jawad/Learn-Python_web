import * as React from 'react';
import { cn } from '../../lib/utils';

/**
 * Watermelon UI Textarea component.
 * Source reference: Watermelon UI Registry (https://ui.watermelon.sh / https://registry.watermelon.sh/r/textarea.json)
 *
 * Implements accessible slot attributes, smooth focus transition, and clean
 * resizing for multi-line inputs with dark text readability.
 */
export const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      data-slot="textarea"
      className={cn(
        'flex min-h-[120px] w-full rounded-md border border-neutral-300 bg-white/95 px-3.5 py-2.5 text-sm text-neutral-900 shadow-sm transition-[color,box-shadow,border-color] outline-none',
        'placeholder:text-neutral-500',
        'focus-visible:border-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-500/30',
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'aria-invalid:border-rose-500 aria-invalid:ring-2 aria-invalid:ring-rose-500/20',
        'resize-y leading-relaxed',
        className
      )}
      {...props}
    />
  );
});

Textarea.displayName = 'Textarea';
export default Textarea;
