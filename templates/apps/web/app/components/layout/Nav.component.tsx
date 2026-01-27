import { useTranslations } from 'next-intl';
import Link from 'next/link';

export function Nav() {
  const t = useTranslations('nav');

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-black backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-white">
          {'{{PROJECT_NAME}}'}
        </Link>

        <ul className="flex items-center gap-6">
          <li>
            <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white">
              {t('home')}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
