'use client';

import { IPageParams } from '@/types';

interface IBasketPage extends IPageParams {}

export const BasketPage = ({ lang }: IBasketPage) => {
  return (
    <section>
      <h1>Basket page - {lang}</h1>
    </section>
  );
};
