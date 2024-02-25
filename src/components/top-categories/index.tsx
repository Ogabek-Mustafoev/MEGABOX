'use client';

import { bottom_arrow, category_icon } from '@/mock';
import { ITopCategories } from '@/types';

import { Button, Image } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

export const TopCategories = ({ data, isFixed }: { isFixed: boolean; data: ITopCategories[] }) => {
  const t = useTranslations('top-categories');

  return (
    <div
      className={`${isFixed ? 'mt-20' : ''} hidden sm:block mb-6 border-t border-b border-border-color`}
    >
      <div className="py-3 w-full container flex items-center gap-5">
        <Button
          radius="sm"
          className="bg-transparent hidden md:flex min-w-80 font-semibold text-base"
          startContent={
            <Image
              alt="category icon"
              src={category_icon.src}
            />
          }
          endContent={
            <Image
              alt="category icon"
              src={bottom_arrow.src}
            />
          }
        >
          {t('product_categories')}
        </Button>
        <p className="h-10 -ml-2 inline-block w-px bg-border-color" />
        <div className="overflow-x-auto flex-1 hide-scroll flex items-center gap-2">
          <Button
            size="lg"
            radius="full"
            className="bg-gradient-to-r text-white from-primary to-pink font-semibold text-base"
          >
            {t('discounts')}
          </Button>
          {data?.map(({ url, key }) => (
            <Button
              key={url}
              className="bg-transparent min-w-28 font-semibold text-base"
            >
              {t(key)}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
