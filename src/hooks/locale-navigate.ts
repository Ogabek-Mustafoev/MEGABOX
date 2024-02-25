import { i18n } from '@/i18n.config';
import { TLocale } from '@/types';

import { usePathname, useRouter } from 'next/navigation';

export const useLocaleNavigate = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navigate = (locale: TLocale, url?: string) => {
    const redirectedPath = getRedirectedPath(locale, url);
    router.push(redirectedPath);
  };

  const getRedirectedPath = (locale: TLocale, url?: string) => {
    if (!pathname) return '/';

    if (url) return `/${locale}/${url}`;

    const hasLocale = i18n.locales.includes(locale);

    if (!hasLocale) return `/${locale}${pathname}`;

    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return { navigate };
};
