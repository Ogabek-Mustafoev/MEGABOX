'use client';

import { IPageParams } from '@/types';

interface IProfilePage extends IPageParams {}

export const ProfilePage = ({ lang }: IProfilePage) => {
  return (
    <section>
      <h1>Profile page - {lang}</h1>
    </section>
  );
};
