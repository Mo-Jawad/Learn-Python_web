import * as React from 'react';
import { cn } from '../../lib/utils';

/**
 * Watermelon UI Input component.
 * Source reference: Watermelon UI Registry (https://ui.watermelon.sh / https://registry.watermelon.sh/r/input.json)
 *
 * Implements accessible slot attributes, smooth focus rings, and dark text
 * styling tailored for high readability on light cards.
 */
export const Input = React.forwardRef(({ className, type = 'text', ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      data-slot="input"
      className={cn(
        'flex h-11 w-full min-w-0 rounded-md border border-neutral-300 bg-white/95 px-3.5 py-2 text-sm text-neutral-900 shadow-sm transition-[color,box-shadow,border-color] outline-none',
        'placeholder:text-neutral-500',
        'focus-visible:border-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-500/30',
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'aria-invalid:border-rose-500 aria-invalid:ring-2 aria-invalid:ring-rose-500/20',
        className
      )}
      {...props}
    />
  );
});

Input.displayName = 'Input';
export default Input;
