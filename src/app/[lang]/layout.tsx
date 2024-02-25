import { BaseLayout, Providers } from '@/components';
import { i18n } from '@/i18n.config';
import '@/styles/globals.scss';
import { TLocale } from '@/types';
import { getLocale } from '@/utils/locales';

import { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E-Commerce app',
  description: 'Online Shopping',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

interface ILayout {
  params: { lang: TLocale };
  children: ReactNode;
}

export default async function RootLayout({ children, params: { lang } }: ILayout) {
  const messages = await getLocale(lang);

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Providers
          lang={lang}
          messages={messages}
        >
          <BaseLayout lang={lang}>{children}</BaseLayout>
        </Providers>
      </body>
    </html>
  );
}
