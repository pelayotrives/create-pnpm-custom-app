import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="animate-fade-in-down text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {t('title')}
          </h1>
          <p className="mt-6 animate-fade-in text-lg text-gray-300">{t('description')}</p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://github.com/{{GITHUB_USER}}/{{PROJECT_NAME}}"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-200"
            >
              View on GitHub
            </a>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-gray-700 bg-gray-900/50 p-6">
              <h3 className="text-lg font-semibold text-white">Next.js 16</h3>
              <p className="mt-2 text-sm text-gray-400">
                Latest Next.js with App Router and React Server Components
              </p>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-900/50 p-6">
              <h3 className="text-lg font-semibold text-white">Fastify + MongoDB</h3>
              <p className="mt-2 text-sm text-gray-400">
                High-performance API with MongoDB database
              </p>
            </div>
            <div className="rounded-lg border border-gray-700 bg-gray-900/50 p-6">
              <h3 className="text-lg font-semibold text-white">pnpm Monorepo</h3>
              <p className="mt-2 text-sm text-gray-400">
                Efficient workspace management with shared packages
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-lg border border-gray-700 bg-gray-900/30 p-6 text-left">
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Start</h3>
            <div className="space-y-3 font-mono text-sm text-gray-300">
              <div className="rounded bg-black/40 p-3">
                <span className="text-gray-500"># Install dependencies</span>
                <br />
                <span className="text-white">pnpm install</span>
              </div>
              <div className="rounded bg-black/40 p-3">
                <span className="text-gray-500"># Start development servers</span>
                <br />
                <span className="text-white">pnpm dev</span>
              </div>
              <div className="rounded bg-black/40 p-3">
                <span className="text-gray-500"># Build for production</span>
                <br />
                <span className="text-white">pnpm build</span>
              </div>
              <div className="rounded bg-black/40 p-3">
                <span className="text-gray-500"># Run tests</span>
                <br />
                <span className="text-white">pnpm test</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
