import free_star from '@/icons/free-star.svg';
import full_star from '@/icons/full-star.svg';
import half_star from '@/icons/half-star.svg';

import React from 'react';

import { Image } from '@nextui-org/image';

interface IStarRating {
  rating: number;
}

const StarRating = ({ rating }: IStarRating) => {
  // const roundedRating = Math.trunc(rating * 2) / 2;
  const fullStarCount = parseInt(String(rating));
  const restStar = rating - fullStarCount;
  const starCount = fullStarCount + (restStar >= 0.25 ? 1 : 0);
  const freeStarCount = 5 - starCount;

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < fullStarCount; i++) {
      stars.push(
        <Image
          className="w-5 h-5"
          key={i}
          src={full_star?.src}
          alt="full star"
        />
      );
    }

    if (restStar >= 0.25 && restStar <= 0.5) {
      stars.push(
        <Image
          className="w-5 h-5"
          key="half"
          src={half_star?.src}
          alt="half star"
        />
      );
    } else if (restStar > 0.5) {
      stars.push(
        <Image
          className="w-5 h-5"
          key="full"
          src={full_star?.src}
          alt="full star"
        />
      );
    }

    for (let i = 0; i < freeStarCount; i++) {
      stars.push(
        <Image
          className="w-5 h-5"
          key={`empty-${i}`}
          src={free_star?.src}
          alt="empty star"
        />
      );
    }

    return stars;
  };

  return <div className="flex items-center">{renderStars()}</div>;
};

export default StarRating;
