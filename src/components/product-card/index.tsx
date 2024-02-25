'use client';

// import HeartIcon from '@/components/product-card/product-favourite-button';
// import StarRating from '@/components/product-card/product-rating';
import cartIcon from '@/icons/backet.svg';
import heartFull from '@/icons/heart-fill.svg';
import heartIcon from '@/icons/heart.svg';
import { IProduct } from '@/types/product.types';
import { priceFormat } from '@/utils/price-format';

import { FC, useState } from 'react';

import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { Button, Tooltip } from '@nextui-org/react';
import { Chip } from '@nextui-org/react';

import cardImage from '../../../public/images/card-img.png';

export const ProductCard: FC<IProduct> = (props) => {
  const { isNew, productName, bonusPrise, price, monthlyPrice } = props;
  const [liked, setLiked] = useState(false);
  const [hovered, setHovered] = useState(false);
  console.log(liked);
  return (
    <div>
      <Card className="border border-border-color rounded-[12px] hover:border-gray-200 relative overflow-hidden group shadow-md">
        <CardHeader className="flex-col items-start rounded-none p-0">
          <Image
            alt="Card background"
            className="object-cover rounded-none p-0"
            src={cardImage?.src}
            width={290}
            height={300}
          />
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <p className="text-muted text-xs">Smartfon</p>
          <p className="font-sans text-black text-lg leading-[150%] break-all line-clamp-2 mt-3">
            {productName?.ru}
          </p>
          {/*<div className="mt-3">*/}
          {/*  <StarRating rating={3.5} />*/}
          {/*</div>*/}
          <Button
            color="secondary"
            variant="bordered"
            size="sm"
            className="mt-3 font-bold bg-light-gray w-1/2 text-black flex items-center justify-start"
          >
            {priceFormat(parseInt(String(monthlyPrice)))}$ dan/oyiga
          </Button>
          <Chip
            color="warning"
            variant="light"
            className="mt-2  border-none flex items-center gap-2 text-sm"
          >
            <small className="text-gray-400 line-through">{priceFormat(+bonusPrise)} $</small>
            <small className="ml-3 text-black">{priceFormat(+price)} $</small>
          </Chip>
          <div className="mt-4 flex justify-between items-center gap-4">
            <Button
              onClick={() => setLiked((prevState) => !prevState)}
              color="primary"
              variant="faded"
              className="bg-light-gray w-full"
              style={{
                transform: hovered ? 'translateX(-110%)' : 'translateX(0)',
                transition: 'transform 0.4s',
              }}
              startContent={
                <Image
                  className="rounded-none"
                  src={liked ? heartFull.src : heartIcon.src}
                  alt="icon"
                />
              }
            ></Button>
            <Button
              color="primary"
              variant="bordered"
              className={'bg-primary w-full  transition-all duration-300'}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              startContent={
                <Image
                  className="rounded-none"
                  src={cartIcon.src}
                  alt="icon"
                />
              }
            ></Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
