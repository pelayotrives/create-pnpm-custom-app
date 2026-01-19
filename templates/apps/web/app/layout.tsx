import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: '{{PROJECT_NAME}}',
  description: 'A professional full-stack monorepo with Next.js, Fastify, and pnpm workspaces',
  metadataBase: new URL('https://your-domain.com'),
  keywords: ['nextjs', 'fastify', 'monorepo', 'pnpm', 'typescript'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: '{{PROJECT_NAME}}',
    description: 'A professional full-stack monorepo',
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: '{{PROJECT_NAME}}',
    description: 'A professional full-stack monorepo',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
