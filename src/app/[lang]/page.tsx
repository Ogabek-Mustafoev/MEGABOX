import { IParams } from '@/types';
import { HomePage } from '@/views';

export default async function Home({ params: { lang } }: IParams) {
  return <HomePage lang={lang} />;
}
