import { FC } from 'react';

import { Image } from '@nextui-org/react';

interface IPopularCategoryCard {
  text: string;
  icon: string;
}

export const PopularCategoryCard: FC<IPopularCategoryCard> = ({ text = 'Televizorlar', icon }) => {
  return (
    <div className="flex min-w-48 bg-light-gray gap-3 p-3 h-full items-start flex-col  rounded-3xl overflow-hidden cursor-pointer">
      <p className="line-clamp-2 mt-2 leading-5 font-semibold text-black">{text}</p>
      <div className="flex items-center justify-center  rounded-xl">
        <Image
          className="rounded-none w-36 h-24 ml-24 object-contain"
          src={icon}
          alt="popular-category icon"
        />
      </div>
    </div>
  );
};
