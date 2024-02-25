import { IParams } from '@/types';
import { CartPage } from '@/views';

export default function Cart({ params: { lang } }: IParams) {
  return <CartPage lang={lang} />;
}
