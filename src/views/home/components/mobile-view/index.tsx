import { ProductCard } from '@/components';
import { productData } from '@/mock';

import { FC } from 'react';

export const MobileView: FC = () => {
  return (
    <div className="sm:hidden pb-10">
      <div className="flex items-center my-3 justify-between">
        <p className="font-bold text-xl sm:text-2xl">Mahsulotlar</p>
      </div>
      <div className="grid grid-cols-2 gap-3 xsm:gap-5">
        {productData?.map((item) => (
          <ProductCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};
