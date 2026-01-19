import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {t('title')}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">{t('description')}</p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://github.com/{{GITHUB_USER}}/{{PROJECT_NAME}}"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View on GitHub
          </a>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border p-6">
            <h3 className="text-lg font-semibold">Next.js 16</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Latest Next.js with App Router and React Server Components
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-lg font-semibold">Fastify + MongoDB</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              High-performance API with MongoDB database
            </p>
          </div>
          <div className="rounded-lg border p-6">
            <h3 className="text-lg font-semibold">pnpm Monorepo</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Efficient workspace management with shared packages
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
