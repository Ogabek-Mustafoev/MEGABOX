import { BrandCard, MiniBanner, ProductCard, Slider } from '@/components';
import arrow_right from '@/icons/arrow-right.svg';
import { productData } from '@/mock';
import { mockMiniBannerData } from '@/mock/mini-banner.data';
import { brandData, IMiniBanner } from '@/mock/slider.data';

import { FC } from 'react';

import { Button, Chip, Image } from '@nextui-org/react';

export const DesktopView: FC = () => {
  return (
    <div className="w-full hidden sm:block">
      <div className="flex items-center justify-between mt-20">
        <p className="font-bold text-xl sm:text-2xl">Top mahsulotlar</p>
        <Button className="bg-light-gray">
          Barchasini Ko'rish
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
        autoPlay={false}
        items={{ desktop: 5, tablet: 3, mobile: 2 }}
      />
      <div className="flex items-center justify-between mt-20">
        <p className="font-bold text-xl sm:text-2xl">iPhone mahsulotlari</p>
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
        <p className="font-bold text-xl sm:text-2xl">Samsung mahsulotlari</p>
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
      <div className="flex items-center justify-between gap-4 mt-20 flex-col md:flex-row">
        {mockMiniBannerData?.map((el: IMiniBanner) => (
          <MiniBanner
            key={el?.url}
            {...el}
          />
        ))}
      </div>
      <div className="flex items-center justify-between mt-20">
        <p className="font-bold text-xl sm:text-2xl">Noutbuk mahsulotlari</p>
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
      <Slider
        title="Bizning afzalliklarimiz"
        childClass="px-1.5"
        arrows={false}
        titleClass="text-xl sm:text-2xl font-bold mt-14"
        component={BrandCard}
        sliderData={brandData}
        items={{ desktop: 5, tablet: 3, mobile: 2 }}
      />
    </div>
  );
};
