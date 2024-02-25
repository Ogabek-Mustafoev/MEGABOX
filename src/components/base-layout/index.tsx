import { TLocale } from '@/types';

import { Fragment, ReactNode } from 'react';

import { Footer, Header, MobileNav } from '../';

interface IBaseLayout {
  children: ReactNode;
  lang: TLocale;
}

export const BaseLayout = ({ children, lang }: IBaseLayout) => (
  <Fragment>
    <Header lang={lang} />
    <main>{children}</main>
    <MobileNav lang={lang} />
    <Footer lang={lang} />
  </Fragment>
);
