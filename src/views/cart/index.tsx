import { IPageParams } from '@/types';

interface ICartPage extends IPageParams {}

export const CartPage = ({ lang }: ICartPage) => {
  return <section>CartPage - {lang}</section>;
};
