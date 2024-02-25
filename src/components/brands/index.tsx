import { ISliderBrands } from '@/mock/slider.data';

import React, { FC } from 'react';

import { Image } from '@nextui-org/react';

export const BrandCard: FC<ISliderBrands> = ({ url, title, description }) => {
  return (
    <div className="rounded-xl border p-5 flex items-center justify-center flex-col h-">
      <Image
        alt="NextUI Fruit Image with Zoom"
        src={url.src}
        className={title && description ? 'w-14 h-14 bg-primary py-3 rounded-full' : ''}
      />
      {title && description && (
        <div className="py-3">
          <p className="py-1 text-center font-[700] tablet:text-[16px] text-[14px] w-full">
            {title}
          </p>
          <p className="text-[13px] text-center font-[400] text-gray leading-[150%] line-clamp-4">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};
