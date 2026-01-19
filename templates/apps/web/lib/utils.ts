import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes
 * 
 * @param inputs - Class values to merge
 * @returns Merged class string
 * 
 * @example
 * ```typescript
 * cn('px-2 py-1', 'bg-primary') // 'px-2 py-1 bg-primary'
 * cn('px-2', someCondition && 'bg-primary') // 'px-2 bg-primary' if someCondition is true
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
