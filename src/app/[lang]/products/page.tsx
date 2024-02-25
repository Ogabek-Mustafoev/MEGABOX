import { IParams } from '@/types';
import { ProductsPage } from '@/views';

export default function Products({ params: { lang } }: IParams) {
  return <ProductsPage lang={lang} />;
}
