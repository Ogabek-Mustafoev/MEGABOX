import { IParams } from '@/types';
import { FavouritesPage } from '@/views';

export default function Favourites({ params: { lang } }: IParams) {
  return <FavouritesPage lang={lang} />;
}
