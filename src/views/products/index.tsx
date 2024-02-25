import { IPageParams } from '@/types';

interface IProductsPage extends IPageParams {}

export const ProductsPage = ({ lang }: IProductsPage) => {
  return <section>ProductsPage - {lang}</section>;
};
