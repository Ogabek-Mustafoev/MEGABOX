import { getRequestConfig } from 'next-intl/server';

export const i18n = {
  defaultLocale: 'uz',
  locales: ['uz', 'cyr', 'ru'],
} as const;

export default getRequestConfig(async () => {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return {
    timeZone: userTimeZone,
  };
});
