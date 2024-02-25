'use client';

import { useLocaleLink } from '@/hooks/locale-link';
import { tabTextVariant, tabVariant } from '@/mock';
import { headerData } from '@/mock/header.data';
import { TLocale } from '@/types';

import { FC, useState } from 'react';

import { Image } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface IMobileNav {
  lang: TLocale;
}

export const MobileNav: FC<IMobileNav> = ({ lang }) => {
  const { LocaleLink } = useLocaleLink();
  const t = useTranslations('header');
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="fixed bottom-2 px-1 left-0 w-full z-[1002] lg:hidden">
      <div className="tabs-component p-2 border border-muted shadow-lg">
        <ul
          className="tab-links"
          role="tablist"
        >
          {headerData.headerLink.map((tab, index) => (
            <motion.li
              key={tab.key}
              className={`tab ${activeTabIndex === index && 'active'}`}
              role="presentation"
              variants={tabVariant}
              animate={activeTabIndex === index ? 'active' : 'inactive'}
            >
              <LocaleLink
                href={tab.url!}
                onClick={() => setActiveTabIndex(index)}
              >
                <Image
                  src={tab.icon.src}
                  alt="icon"
                />
                <motion.span
                  className="whitespace-nowrap text-white font-semibold"
                  variants={tabTextVariant}
                >
                  {t(tab.key)}
                </motion.span>
              </LocaleLink>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};
