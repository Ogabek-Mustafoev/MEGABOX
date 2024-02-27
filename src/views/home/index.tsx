'use client';

import { Banner, Slider, PopularCategoryCard } from '@/components';
import { useAppSelector } from '@/hooks';
import { popularCategoriesData, bannerData } from '@/mock';
import { IPageParams } from '@/types';

import { Image } from '@nextui-org/react';

import { DesktopView, MobileView } from './components';

interface IHomePage extends IPageParams {}

export const HomePage = ({ lang }: IHomePage) => {
  const { isFixed } = useAppSelector((state) => state.header);

  return (
    <section className={`${isFixed ? 'mt-32' : 'mt-0'} sm:mt-0 container`}>
      <div className="flex w-full items-stretch gap-5 min-h-36 md:min-h-96 lg:min-h-[420px]">
        <Slider
          showDots
          arrows={false}
          autoPlay={false}
          component={Banner}
          wrapperClass="w-full min-h-full lg:w-3/4"
          childClass={'h-full'}
          sliderData={bannerData}
          parentClass="rounded-md h-full overflow-hidden"
          items={{ desktop: 1, tablet: 1, mobile: 1 }}
          dotListClass="banner__dot_list"
        />
        <div className="w-1/4 hidden lg:grid grid-rows-2 gap-5">
          <Image
            className="w-full h-full object-cover rounded-md"
            classNames={{
              img: 'h-full w-full',
            }}
            alt="banner-img-1"
            src="https://assets.chakana.uz/banner/middle//6549d122860d9.webp"
          />
          <Image
            className="w-full h-full object-cover rounded-md"
            alt="banner-img-2"
            src="https://assets.chakana.uz/banner/middle//6549d122860d9.webp"
          />
        </div>
      </div>
      <p className="text-xl sm:text-2xl mt-4 mb-6 font-bold">Mahsulotlar kategoriyasi</p>
      <div className="flex gap-3 hide-scroll overflow-x-auto">
        {popularCategoriesData?.map((item, idx) => (
          <PopularCategoryCard
            key={idx}
            {...item}
          />
        ))}
      </div>
      <DesktopView />
      <MobileView />
    </section>
  );
};
