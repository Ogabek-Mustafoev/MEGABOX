'use client';

import { ITopCategories } from '@/types';

import { useTranslations } from 'next-intl';

export const TopCategories = ({ data, isFixed }: { isFixed: boolean; data: ITopCategories[] }) => {
  const t = useTranslations('top-categories');
  return (
    <div
      className={`${isFixed ? 'mt-20' : 'mt-5'} flex items-center gap-5 overflow-x-auto hide-scroll`}
    >
      {data.map(({ url, key }, idx) => (
        <p
          key={idx}
          className="whitespace-nowrap text-muted text-sm font-normal"
        >
          {t(key)}
        </p>
      ))}
    </div>
  );
};
