import { IParams } from '@/types';
import { BasketPage } from '@/views';

export default function Basket({ params: { lang } }: IParams) {
  return <BasketPage lang={lang} />;
}
