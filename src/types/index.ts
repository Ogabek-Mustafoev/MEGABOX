import { i18n } from '@/i18n.config';

export type TLocale = (typeof i18n)['locales'][number];

export interface IParams {
  params: { lang: TLocale };
}

export interface IOption {
  value: string;
  label: string;
}

export interface IHeaderTop {
  key: string;
  url: string;
}

export interface IHeaderJoin {
  id?: string;
  icon: { src: string };
  url: string;
}

export interface ITopCategories {
  key: string;
  url: string;
}

export interface IPageParams {
  lang: TLocale;
}
