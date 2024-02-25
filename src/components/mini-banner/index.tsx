// import arrowIcon from '@/icons/arrow-right.svg';
import { IMiniBanner } from '@/mock/slider.data';

import { FC } from 'react';

import { Image } from '@nextui-org/react';
import Link from 'next/link';

export const MiniBanner: FC<IMiniBanner> = (props) => {
  const { url, imageUrl } = props;
  return (
    <div className="w-full relative">
      <Image
        src={imageUrl}
        alt=""
        className="object-cover w-full"
      />
      <Link
        href="#"
        className=" flex absolute items-center gap-2 top-0"
      >
        <span className="text-blue-600">Barchasini ko'rish {'->'}</span>
      </Link>
    </div>
  );
};
