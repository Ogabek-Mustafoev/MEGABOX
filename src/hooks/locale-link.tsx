import { ReactNode } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ILocaleLink {
  href: string;
  children: ReactNode;

  [key: string]: any;
}

export const useLocaleLink = (locale?: string) => {
  const pathname = usePathname();

  const getRedirectedPath = (href: string) => {
    if (!pathname) return '/';
    if (locale) {
      return `/${locale}/${href}`;
    } else {
      const locale = pathname.split('/')[1];
      return `/${locale}/${href}`;
    }
  };

  const LocaleLink = ({ href, ...props }: ILocaleLink) => {
    const redirectedPath = getRedirectedPath(href);
    return (
      <Link
        href={redirectedPath}
        {...props}
      />
    );
  };

  return { LocaleLink };
};
