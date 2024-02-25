import { IPageParams } from '@/types';

interface ICategoriesPage extends IPageParams {}

export const CategoriesPage = ({ lang }: ICategoriesPage) => {
  return <section>CategoriesPage - {lang}</section>;
};
