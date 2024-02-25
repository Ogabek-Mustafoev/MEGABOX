import { basket_icon, heart_icon, user_icon, home_icon } from '@/mock';
import { IHeaderJoin, IHeaderTop } from '@/types';

import instagram from '../../public/icons/instagram.svg';
import telegram from '../../public/icons/telegram.svg';

interface IHeaderLink {
  key: string;
  icon: { src: string };
  classes?: string;
  url?: string;
}

export interface IHeaderData {
  headerTop: IHeaderTop[];
  headerLink: IHeaderLink[];
}

export const headerData: IHeaderData = {
  headerTop: [
    { key: 'about_us', url: '/' },
    { key: 'delivery', url: '/' },
    { key: 'shop', url: '/' },
    { key: 'contact', url: '/' },
  ],
  headerLink: [
    { key: 'home', icon: home_icon, url: '/', classes: 'lg:hidden active' },
    { key: 'favourites', icon: heart_icon, url: '/favourites' },
    { key: 'basket', icon: basket_icon, url: '/basket' },
  ],
};

export const headerJoinData: IHeaderJoin[] = [
  {
    id: '1',
    icon: telegram,
    url: 'https://t.me/',
  },
  {
    id: '2',
    icon: instagram,
    url: 'https://instagram.com/',
  },
];
