'use client';

import { TLocale } from '@/types';

import { ReactNode } from 'react';

import { NextUIProvider } from '@nextui-org/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';

interface IProvider {
  children: ReactNode;
  lang: TLocale;
  messages: AbstractIntlMessages;
}

export const Providers = ({ children, lang, messages }: IProvider) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NextIntlClientProvider
        locale={lang}
        messages={messages}
      >
        <NextUIProvider>{children}</NextUIProvider>
      </NextIntlClientProvider>
    </QueryClientProvider>
  );
};
