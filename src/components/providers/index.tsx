'use client';

import { store } from '@/store';
import { TLocale } from '@/types';

import { ReactNode } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { Provider } from 'react-redux';

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
    <GoogleReCaptchaProvider
      language="ru"
      scriptProps={{
        defer: true,
      }}
      reCaptchaKey={`${process.env.NEXT_PUBLIC_CAPTCHA_KEY}`}
    >
      <QueryClientProvider client={queryClient}>
        <NextIntlClientProvider
          locale={lang}
          messages={messages}
        >
          <Provider store={store}>
            <NextUIProvider>{children}</NextUIProvider>
          </Provider>
        </NextIntlClientProvider>
      </QueryClientProvider>
    </GoogleReCaptchaProvider>
  );
};
