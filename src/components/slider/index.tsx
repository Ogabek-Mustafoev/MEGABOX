'use client';

import { IPopularCategory, ISlide, ISliderBrands } from '@/mock/slider.data';
import { IProduct } from '@/types/product.types';

import { FC } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface ISlider {
  items?: {
    desktop?: number;
    tablet?: number;
    mobile?: number;
  };
  wrapperClass?: string;
  parentClass?: string;
  childClass?: string;
  loop?: boolean;
  component: FC<IProduct> | FC<ISlide> | FC<IPopularCategory> | FC<ISliderBrands>;
  sliderData: any[];
  title?: string;
  dotListClass?: string;
  titleClass?: string;
  showDots?: boolean;
  autoPlay?: boolean;
  arrows?: boolean;
}

export const Slider: FC<ISlider> = (props) => {
  const {
    items,
    title,
    titleClass,
    sliderData,
    component: Component,
    dotListClass = '',
    arrows = true,
    autoPlay = true,
    showDots = false,
    parentClass = 'py-3',
    childClass = 'px-3 h-full',
    wrapperClass = 'flex flex-col gap-3 mt-3',
  } = props;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: items?.desktop || 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: items?.tablet || 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: items?.mobile || 2,
      slidesToSlide: 1,
    },
  };

  return (
    <div className={wrapperClass}>
      {title && <p className={titleClass}>{title}</p>}
      <Carousel
        arrows={arrows}
        infinite={true}
        swipeable={true}
        autoPlay={autoPlay}
        showDots={showDots}
        sliderClass="h-full"
        partialVisible={true}
        itemClass={childClass}
        responsive={responsive}
        className={parentClass}
        dotListClass={dotListClass}
        containerClass="w-full h-full"
      >
        {sliderData.map((item, idx) => (
          <Component
            key={idx}
            {...item}
          />
        ))}
      </Carousel>
    </div>
  );
};
