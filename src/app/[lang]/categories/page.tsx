import { IParams } from '@/types';
import { CategoriesPage } from '@/views';

export default function Categories({ params: { lang } }: IParams) {
  return <CategoriesPage lang={lang} />;
}
