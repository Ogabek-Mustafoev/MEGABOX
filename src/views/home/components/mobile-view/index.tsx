'use client';

import { ProductCard } from '@/components';
import { gallery_filled, gallery_outlined, list_filled, list_outlined, productData } from '@/mock';

import { FC, useEffect, useState } from 'react';

import { Button, Image } from '@nextui-org/react';

export const MobileView: FC = () => {
  const [isListView, setIsListView] = useState(false);

  const changeLayout = (value: boolean) => {
    setIsListView(value);
    localStorage.setItem('isListView', `${value}`);
  };

  useEffect(() => {
    const isListView = Boolean(localStorage.getItem('isListView'));
    setIsListView(isListView);
  }, []);

  return (
    <div className="sm:hidden pb-10">
      <div className="flex items-center my-3 justify-between">
        <p className="font-bold text-xl sm:text-2xl">Mahsulotlar</p>
        <div className="flex gap-2">
          <Button
            size="sm"
            radius="sm"
            isIconOnly
            className="bg-transparent"
            onClick={() => changeLayout(false)}
          >
            <Image
              alt="gallery icon"
              className="rounded-none w-6 h-6"
              src={isListView ? gallery_outlined.src : gallery_filled.src}
            />
          </Button>
          <Button
            size="sm"
            radius="sm"
            isIconOnly
            className="bg-transparent"
            onClick={() => changeLayout(true)}
          >
            <Image
              alt="gallery icon"
              className="rounded-none w-6 h-6"
              src={isListView ? list_filled.src : list_outlined.src}
            />
          </Button>
        </div>
      </div>
      <div className={`grid ${isListView ? 'grid-cols-1' : 'grid-cols-2'} gap-3 xsm:gap-5`}>
        {productData?.map((item) => (
          <ProductCard
            isHorizontal={isListView}
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};
