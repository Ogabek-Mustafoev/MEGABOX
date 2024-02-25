import { ISlide } from '@/mock/slider.data';

import { FC } from 'react';

import { Image } from '@nextui-org/react';

export const Banner: FC<ISlide> = (props) => {
  const { url } = props;
  return (
    <Image
      className="w-full h-full rounded-none"
      src={url}
      alt="banner-img"
    />
  );
};
