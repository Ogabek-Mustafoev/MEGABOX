'use client';

import { LocaleSwitcher } from '@/components';
import { headerJoinData } from '@/mock/header.data';
import { IHeaderJoin, IHeaderTop } from '@/types';

import { Image } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

export const HeaderTop = ({ data }: { data: IHeaderTop[] }) => {
  const t = useTranslations('header');

  return (
    <div className="bg-light-gray">
      <div className="hidden container lg:flex items-center justify-between gap-7">
        <div className="flex items-center gap-5 text-sm font-semibold">
          <div className="flex items-center gap-3">
            <p>{t('join')}</p>
            {headerJoinData.map((el: IHeaderJoin) => (
              <a
                href={el.url}
                target="_blank"
                key={el.id}
              >
                <Image
                  className="w-5 h-5 cursor-pointer"
                  src={el.icon?.src}
                  alt={el.id + 'icon'}
                />
              </a>
            ))}
          </div>
          <span className="text-dark-gray">|</span>
          <a href="tel:+998990149998">+998 (93) 908-70-85</a>
        </div>
        <div className="ml-auto">
          <LocaleSwitcher />
        </div>
      </div>
    </div>
  );
};
