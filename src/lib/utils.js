import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges class names safely with Tailwind CSS precedence.
 * Standard helper used by shadcn/ui and Watermelon UI components.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
