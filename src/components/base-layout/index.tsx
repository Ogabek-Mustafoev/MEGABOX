import { TLocale } from '@/types';

import { Fragment, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

import { Footer, Header, MobileNav } from '../';

interface IBaseLayout {
  children: ReactNode;
  lang: TLocale;
}

export const BaseLayout = ({ children, lang }: IBaseLayout) => (
  <Fragment>
    <Toaster />
    <Header lang={lang} />
    <main>{children}</main>
    <MobileNav lang={lang} />
    <Footer lang={lang} />
  </Fragment>
);
