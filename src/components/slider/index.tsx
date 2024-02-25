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
  titleClass?: string;
  showDots?: boolean;
}

export const Slider: FC<ISlider> = (props) => {
  const {
    items,
    titleClass,
    title,
    component: Component,
    sliderData,
    parentClass = 'py-3',
    childClass = 'px-3',
    wrapperClass = 'flex flex-col gap-3 mt-3',
    showDots,
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
        className={parentClass}
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        showDots={showDots}
        infinite={true}
        partialVisible={true}
        itemClass={childClass}
        dotListClass="custom-dot-list-style"
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
