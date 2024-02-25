'use client';

import { useLocaleNavigate } from '@/hooks';
import { languages } from '@/mock';
import { IOption, TLocale } from '@/types';

import { FC } from 'react';

import { Select, SelectItem } from '@nextui-org/react';
import { usePathname } from 'next/navigation';

interface ILocaleSwitcher {
  className?: string;
}

export const LocaleSwitcher: FC<ILocaleSwitcher> = ({ className }) => {
  const pathname = usePathname();
  const { navigate } = useLocaleNavigate();

  const handleClick = (item: IOption) => {
    navigate(item.value as TLocale);
  };

  return (
    <Select
      size="sm"
      className={`${className} w-[100px] p-0 m-0 language-select`}
      placeholder="Select"
      defaultSelectedKeys={[pathname.split('/')[1]]}
      aria-label="language-select"
      classNames={{
        trigger: 'p-0 m-0 bg-transparent shadow-none hover:bg-transparent',
      }}
      style={{ background: 'transparent' }}
    >
      {languages.map((item) => (
        <SelectItem
          key={item.value}
          value={item.value}
          onClick={() => handleClick(item)}
          style={{ fontSize: '10px' }}
          className="p-0 m-0 gap-0"
        >
          {item.label}
        </SelectItem>
      ))}
    </Select>
  );
};
