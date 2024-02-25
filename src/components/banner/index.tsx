import { ISlide } from '@/mock/slider.data';

import { FC } from 'react';

import { Image } from '@nextui-org/react';

export const Banner: FC<ISlide> = (props) => {
  const { url } = props;
  return (
    <Image
      className="w-full h-full object-cover rounded-none"
      classNames={{
        wrapper: 'w-full h-full',
      }}
      src={url}
      alt="banner-img"
    />
  );
};
