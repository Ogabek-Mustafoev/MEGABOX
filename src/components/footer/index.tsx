'use client';

import {
  facebook,
  footer_data,
  paymentMethod,
  instagram,
  telegram,
  twitter,
  youtube,
} from '@/mock';
import { TLocale } from '@/types';

import { Image } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

interface IFooter {
  lang: TLocale;
}

const imgLogo = [
  { img: telegram, link: 'https://www.telegram.com/' },
  { img: instagram, link: 'https://www.instagram.com/' },
  { img: facebook, link: 'https://www.facebook.com/' },
  { img: youtube, link: 'https://twitter.com/i/flow/signup' },
];

export const Footer = ({ lang }: IFooter) => {
  const t = useTranslations('footer-link');
  return (
    <footer className="lg:block bg-dark-blue w-full relative z-3 mt-14">
      <div className="container mx-auto flex justify-between  pt-[44px] pb-6 w-full">
        <div className="xl:mb-0 mb-10">
          <div className="text-white xl:ml-0 ml-5">
            <p className="text-sm font-normal mb-5">{t('questions')}</p>
            <a
              className="text-2xl font-semibold text-white mb-4 block"
              href="tel:+998712033333"
            >
              +998 71 203 33 33
            </a>
            <div className="flex gap-4">
              {imgLogo.map((item, index: number) => {
                return (
                  <a
                    className="flex justify-center bg-light-blue items-center rounded-[8px] w-14 h-14 hover:transform hover:-translate-y-3 transition-transform duration-300"
                    key={index}
                    href={item.link}
                  >
                    <Image
                      className="invert w-full"
                      src={item.img.src}
                      alt="image"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-full text-white ">
            <h1 className="text-base font-semibold text-white cursor-pointer mb-5">
              {t('payment_methods')}
            </h1>
            <div className="grid grid-cols-3 gap-4 max-w-[467px]">
              {paymentMethod.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-light-blue p-4 w-28 cursor-pointer  rounded-lg h-12 flex items-center justify-center"
                  >
                    <Image
                      src={item.paymentImg.src}
                      alt="payment image"
                      className="rounded-none"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-3">
            {footer_data.map((item, index) => {
              return (
                <div
                  className="w-full px-10"
                  key={index}
                >
                  <h1 className="text-base font-semibold text-white cursor-pointer mb-3">
                    {t(item.title)}
                  </h1>
                  <div className="flex flex-col gap-1">
                    {item.footerlist.map((data, index) => {
                      return (
                        <a
                          key={index}
                          className="text-sm text-gray-300 opacity-50 hover:opacity-100 w-max py-0.5"
                          href={data.link}
                        >
                          {t(data.listName)}
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-slate-800 w-full py-3">
        <div className="container mx-auto text-white flex items-center justify-center py-1.5">
          <h1>OOO "MEGABOX MARKET" | Barcha huquqlar himoyalangan </h1>
        </div>
      </div>
    </footer>
  );
};
