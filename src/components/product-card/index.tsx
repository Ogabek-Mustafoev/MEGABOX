'use client';

import StarRating from '@/components/product-card/product-rating';
import cartIcon from '@/icons/backet.svg';
import heartFull from '@/icons/heart-fill.svg';
import heartIcon from '@/icons/heart.svg';
import cardImage from '@/images/card-img.png';
import { IProduct } from '@/types/product.types';
import { priceFormat } from '@/utils/price-format';

import { FC, useState } from 'react';

import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { Button } from '@nextui-org/react';

interface IProductCard extends IProduct {
  isHorizontal?: boolean;
}

export const ProductCard: FC<IProductCard> = (props) => {
  const { isNew, isHorizontal, productName, bonusPrise, price, monthlyPrice } = props;
  const [liked, setLiked] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      classNames={{
        base: `${isHorizontal && 'flex-row'} border border-border-color rounded-xl hover:border-gray-200 relative overflow-hidden group shadow-md`,
        header: `${isHorizontal && 'w-28 ml-2'}`,
      }}
    >
      <CardHeader className="rounded-none p-0">
        <Image
          isZoomed
          alt="Card background"
          className="object-cover w-full rounded-none p-0"
          classNames={{
            wrapper: `min-w-full ${isHorizontal ? 'h-full py-2' : ''}  rounded-none`,
            zoomedWrapper: isHorizontal ? 'h-full' : 'rounded-none',
            img: isHorizontal ? 'h-full' : '',
          }}
          src={cardImage?.src}
        />
      </CardHeader>
      <CardBody className="py-2 flex flex-col gap-2 sm:gap-3">
        <p className="text-muted text-xs hidden sm:block">Smartfon</p>
        <p className="font-sans text-black text-sm font-semibold sm:text-lg break-all line-clamp-2">
          {productName?.ru}
        </p>
        <StarRating rating={3.5} />
        <p className="text-xs font-semibold px-2 py-1 bg-light-gray rounded-md w-max">
          {priceFormat(parseInt(String(monthlyPrice)))}$ dan/oyiga
        </p>
        {isHorizontal ? (
          ''
        ) : (
          <div className="flex gap-2 text-xs sm:text-sm">
            <p className="text-gray-400 break-all line-clamp-1 line-through">
              {priceFormat(+bonusPrise)} $
            </p>
            <p className="text-black break-all line-clamp-1">{priceFormat(+price)} $</p>
          </div>
        )}
        <div className="flex justify-between items-center gap-2 sm:gap-4">
          <Button
            onClick={() => setLiked((prevState) => !prevState)}
            color="primary"
            variant="faded"
            size={isHorizontal ? 'sm' : 'md'}
            className="bg-light-gray w-full"
            style={{
              transform: hovered ? 'translateX(-110%)' : 'translateX(0)',
              transition: 'transform 0.4s',
            }}
            isIconOnly
          >
            <Image
              className="rounded-none"
              src={liked ? heartFull.src : heartIcon.src}
              alt="icon"
            />
          </Button>
          <Button
            color="primary"
            variant="bordered"
            size={isHorizontal ? 'sm' : 'md'}
            className={'bg-primary w-full  transition-all duration-300'}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            isIconOnly
          >
            <Image
              className="rounded-none"
              src={cartIcon.src}
              alt="icon"
            />
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};
