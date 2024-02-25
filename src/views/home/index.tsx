'use client';

import {
  Banner,
  Slider,
  BrandCard,
  ProductCard,
  PopularCategoryCard,
  MiniBanner,
} from '@/components';
import { productData, popularCategoriesData, bannerData } from '@/mock';
import { mockMiniBannerData } from '@/mock/mini-banner.data';
import { brandData, IMiniBanner, popularBrandData } from '@/mock/slider.data';
import { IPageParams } from '@/types';

import { Button, Chip, Image } from '@nextui-org/react';

import arrow_right from '../../../public/icons/arrow-right.svg';

interface IHomePage extends IPageParams {}

export const HomePage = ({ lang }: IHomePage) => {
  return (
    <section className="container">
      <div className="flex w-full gap-2 items-center">
        <Slider
          component={Banner}
          childClass={''}
          wrapperClass="w-full flex-1"
          parentClass="rounded-xl overflow-hidden my-6"
          sliderData={bannerData}
          items={{ desktop: 1, tablet: 1, mobile: 1 }}
        />
      </div>
      <p className="text-2xl mt-4 mb-6 font-bold">Mahsulotlar kategoriyasi</p>
      <div className="flex gap-3 hide-scroll overflow-x-auto">
        {popularCategoriesData?.map((item, idx) => (
          <PopularCategoryCard
            key={idx}
            {...item}
          />
        ))}
      </div>
      <div className="flex items-center justify-between mt-20">
        <p className="font-bold text-2xl">Top mahsulotlar</p>
        <Button className="bg-light-gray">
          Barchasini Ko'rish{' '}
          <Image
            src={arrow_right.src}
            alt="arrow right icon"
          />
        </Button>
      </div>
      <div className="flex items-center gap-3.5">
        <Chip className="bg-light-green cursor-pointer">Barchasi</Chip>
        <Chip
          color="default"
          className="cursor-pointer"
        >
          Yangi
        </Chip>
        <Chip
          color="default"
          className="cursor-pointer"
        >
          B/U
        </Chip>
      </div>
      <Slider
        component={ProductCard}
        sliderData={productData}
        items={{ desktop: 5, tablet: 3, mobile: 2 }}
      />
      <div className="flex items-center justify-between mt-20">
        <p className="font-bold text-2xl">iPhone mahsulotlari</p>
        <Button className="bg-light-gray">
          Barchasini Ko'rish{' '}
          <Image
            src={arrow_right.src}
            alt="arrow right icon"
          />
        </Button>
      </div>
      <div className="flex items-center gap-3.5">
        <Chip className="bg-light-green cursor-pointer">Barchasi</Chip>
        <Chip
          color="default"
          className="cursor-pointer"
        >
          Yangi
        </Chip>
        <Chip
          color="default"
          className="cursor-pointer"
        >
          B/U
        </Chip>
      </div>
      <Slider
        component={ProductCard}
        sliderData={productData}
        items={{ desktop: 5, tablet: 3, mobile: 2 }}
      />
      <div className="flex items-center justify-between mt-20">
        <p className="font-bold text-2xl">Samsung mahsulotlari</p>
        <Button className="bg-light-gray">
          Barchasini Ko'rish{' '}
          <Image
            src={arrow_right.src}
            alt="arrow right icon"
          />
        </Button>
      </div>
      <div className="flex items-center gap-3.5">
        <Chip className="bg-light-green cursor-pointer">Barchasi</Chip>
        <Chip
          color="default"
          className="cursor-pointer"
        >
          Yangi
        </Chip>
        <Chip
          color="default"
          className="cursor-pointer"
        >
          B/U
        </Chip>
      </div>
      <Slider
        component={ProductCard}
        sliderData={productData}
        items={{ desktop: 5, tablet: 3, mobile: 2 }}
      />
      {/*<Slider*/}
      {/*  component={Banner}*/}
      {/*  childClass=""*/}
      {/*  parentClass="rounded-3xl overflow-hidden my-6"*/}
      {/*  sliderData={bannerData}*/}
      {/*  items={{ desktop: 1, tablet: 1, mobile: 1 }}*/}
      {/*/>*/}
      <div className="flex items-center justify-between gap-4 mt-20 flex-col md:flex-row">
        {mockMiniBannerData?.map((el: IMiniBanner) => (
          <MiniBanner
            key={el?.url}
            {...el}
          />
        ))}
      </div>
      <div className="flex items-center justify-between mt-20">
        <p className="font-bold text-2xl">Noutbuk mahsulotlari</p>
        <Button className="bg-light-gray">
          Barchasini Ko'rish{' '}
          <Image
            src={arrow_right.src}
            alt="arrow right icon"
          />
        </Button>
      </div>
      <div className="flex items-center gap-3.5">
        <Chip className="bg-light-green cursor-pointer">Barchasi</Chip>
        <Chip
          color="default"
          className="cursor-pointer"
        >
          Yangi
        </Chip>
        <Chip
          color="default"
          className="cursor-pointer"
        >
          B/U
        </Chip>
      </div>
      <Slider
        component={ProductCard}
        sliderData={productData}
        items={{ desktop: 5, tablet: 3, mobile: 2 }}
      />
      {/*<Slider*/}
      {/*  title="Ommabop brendlar"*/}
      {/*  childClass="px-1.5"*/}
      {/*  titleClass="text-2xl font-bold mt-14"*/}
      {/*  component={BrandCard}*/}
      {/*  sliderData={popularBrandData}*/}
      {/*  items={{ desktop: 6, tablet: 3, mobile: 2 }}*/}
      {/*/>*/}
      <Slider
        title="Bizning afzalliklarimiz"
        childClass="px-1.5"
        titleClass="text-2xl font-bold mt-14"
        component={BrandCard}
        sliderData={brandData}
        items={{ desktop: 5, tablet: 3, mobile: 2 }}
      />
    </section>
  );
};
