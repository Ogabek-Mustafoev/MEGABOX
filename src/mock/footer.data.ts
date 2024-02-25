import { anor_bank, click_icon, humo, payme, uzcard, visa } from '@/mock/index';

export const footer_data = [
  {
    title: 'data',
    footerlist: [
      { listName: 'delivery_ways', link: '#' },
      { listName: 'actions', link: '#' },
      { listName: 'give-back', link: '#' },
      { listName: 'help', link: '#' },
    ],
  },
];

export const paymentMethod = [
  { paymentImg: anor_bank, link: '#' },
  { paymentImg: payme, link: '#' },
  { paymentImg: click_icon, link: '#' },
  { paymentImg: humo, link: '#' },
  { paymentImg: uzcard, link: '#' },
  { paymentImg: visa, link: '#' },
];

export const application_link = [
  {
    icon: 'https://mediapark.uz/images/appstore.svg',
    link: 'https://apps.apple.com/uz/app/mediapark/id1671707947',
  },
  {
    icon: 'https://mediapark.uz/images/googleplay.svg',
    link: 'https://apps.apple.com/uz/app/mediapark/id1671707947',
  },
  {
    icon: 'https://mediapark.uz/images/huaweistore.svg',
    link: 'https://apps.apple.com/uz/app/mediapark/id1671707947',
  },
];
