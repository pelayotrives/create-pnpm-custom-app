'use client';

import { ReactNode } from 'react';

/**
 * Providers component
 *
 * This component wraps the application with context providers.
 * Add your theme providers, state management providers, etc. here.
 *
 * @example
 * // Add a theme provider:
 * import { ThemeProvider } from 'next-themes';
 *
 * export function Providers({ children }: { children: ReactNode }) {
 *   return (
 *     <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
 *       {children}
 *     </ThemeProvider>
 *   );
 * }
 */
export function Providers({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
