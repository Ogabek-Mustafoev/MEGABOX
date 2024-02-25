import { IParams } from '@/types';
import { ProfilePage } from '@/views';

export default function Profile({ params: { lang } }: IParams) {
  return <ProfilePage lang={lang} />;
}
