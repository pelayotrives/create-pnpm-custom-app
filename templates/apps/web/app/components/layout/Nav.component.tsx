import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function Nav() {
  const t = useTranslations('nav');

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          {{PROJECT_NAME}}
        </Link>

        <ul className="flex items-center gap-6">
          <li>
            <Link href="/" className="text-sm font-medium hover:text-primary">
              {t('home')}
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              {t('about')}
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              {t('contact')}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
