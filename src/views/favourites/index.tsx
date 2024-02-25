'use client';

import { IPageParams } from '@/types';

interface IFavouritesPage extends IPageParams {}

export const FavouritesPage = ({ lang }: IFavouritesPage) => {
  return (
    <section>
      <h1>Favourites page - {lang}</h1>
    </section>
  );
};
