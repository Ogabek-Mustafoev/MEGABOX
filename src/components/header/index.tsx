'use client';

import { HeaderTop } from '@/components/header/header-top';
import { TopCategories } from '@/components/top-categories';
import { useLocaleLink } from '@/hooks/locale-link';
import { enter_icon, search_icon } from '@/mock';
import { headerData } from '@/mock/header.data';
import { topCategories } from '@/mock/top-categories.data';
import { TLocale } from '@/types';

import { useEffect, useState } from 'react';

import { Button, Image, Input } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

import { MobileNav } from '../';

interface IHeader {
  lang: TLocale;
}

export const Header = ({ lang }: IHeader) => {
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const t = useTranslations('header');
  const { LocaleLink } = useLocaleLink();

  const onWindowScroll = () => {
    const scrollHeight = window.scrollY;
    if (scrollHeight > 40) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onWindowScroll);

    return () => {
      window.removeEventListener('scroll', onWindowScroll);
    };
  }, []);

  return (
    <header>
      <HeaderTop data={headerData.headerTop} />
      <nav className={isFixed ? 'fixed shadow-lg top-0 left-0 w-full z-[1001] bg-white' : ''}>
        <div className={`container flex justify-between gap-5 py-3 items-center`}>
          <LocaleLink href="/">
            <span className="font-bold text-3xl">MEGABOX</span>
          </LocaleLink>

          <div className="flex-1 max-w-xl mx-auto">
            <Input
              size="sm"
              type="text"
              placeholder={t('search')}
              variant="bordered"
              radius="sm"
              classNames={{
                innerWrapper: 'bg-transparent overflow-hidden p-0 shadow-none border-none',
                inputWrapper: 'bg-transparent p-0 shadow-none border',
                input: 'bg-transparent -ml-2 border-none shadow-none',
              }}
              startContent={
                <Button
                  isIconOnly
                  size="lg"
                  radius="sm"
                  className="bg-transparent"
                >
                  <Image
                    src={search_icon.src}
                    alt="search"
                  />
                </Button>
              }
              endContent={
                <Button
                  className="bg-light-gray text-sm font-semibold"
                  size="lg"
                  radius="sm"
                >
                  {t('searching')}
                </Button>
              }
            />
          </div>
          <ul className="hidden lg:flex gap-4 items-center">
            <li className="flex items-center gap-3 cursor-pointer">
              <p className="font-semibold text-sm">{t('enter')}</p>
              <Image
                src={enter_icon.src}
                className="rounded-none w-5 h-5"
                alt="enter"
              />
            </li>
            <li className="w-px h-10 bg-[#E8ECEF]" />
            {headerData.headerLink.map(({ key, classes, icon, url }, idx) => (
              <li
                key={idx}
                className={`flex ${classes} w-10 h-10 rounded-full bg-light-gray text-sm font-semibold cursor-pointer flex-col gap-1 items-center justify-center`}
                onClick={() => (key == 'signIn' ? console.log('Open') : console.log('Close'))}
              >
                <LocaleLink href={url as string}>
                  <Image
                    src={icon.src}
                    alt={key + ' icon'}
                    className="w-5 h-5 rounded-none"
                  />
                </LocaleLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <MobileNav lang={lang} />
      {/*<TopCategories*/}
      {/*  isFixed={isFixed}*/}
      {/*  data={topCategories}*/}
      {/*/>*/}
    </header>
  );
};
