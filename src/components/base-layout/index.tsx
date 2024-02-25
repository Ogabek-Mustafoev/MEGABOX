import { TLocale } from '@/types';

import { Fragment, ReactNode } from 'react';

import { Footer, Header } from '../';

interface IBaseLayout {
  children: ReactNode;
  lang: TLocale;
}

export const BaseLayout = ({ children, lang }: IBaseLayout) => (
  <Fragment>
    <Header lang={lang} />
    <main>{children}</main>
    <Footer lang={lang} />
  </Fragment>
);
