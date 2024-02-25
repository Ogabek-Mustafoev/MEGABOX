import icons from '@/icons/check-file.svg';
import { change_icon, check_file, delivery, faq, guarantee } from '@/mock/index';

export interface ISlide {
  url: string;
}

export interface IMiniBanner {
  url: string;
  imageUrl: string;
}

export interface ISliderBrands {
  url: { src: string };
  title: string;
  description: string;
}

export interface IPopularCategory {
  icon: string;
  text: string;
}

export const popularBrandData: ISlide[] = [
  {
    url: 'https://cdn.mediapark.uz/images/39cf5026-f1e8-4f56-8f3e-91e245a07b99_%D0%91%D0%B5%D0%B7%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-21.png',
  },
  {
    url: 'https://cdn.mediapark.uz/images/31344135-65fa-4766-8881-6534aff9e1c0_%D0%91%D0%B5%D0%B7%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-2.png',
  },
  {
    url: 'https://cdn.mediapark.uz/images/3ef87389-ac93-4054-8cb4-3acc6bea3269_lg.png',
  },
  {
    url: 'https://cdn.mediapark.uz/images/39cf5026-f1e8-4f56-8f3e-91e245a07b99_%D0%91%D0%B5%D0%B7%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-21.png',
  },
  {
    url: 'https://cdn.mediapark.uz/images/31344135-65fa-4766-8881-6534aff9e1c0_%D0%91%D0%B5%D0%B7%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-2.png',
  },
  {
    url: 'https://cdn.mediapark.uz/images/31344135-65fa-4766-8881-6534aff9e1c0_%D0%91%D0%B5%D0%B7%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-2.png',
  },
  {
    url: 'https://cdn.mediapark.uz/images/31344135-65fa-4766-8881-6534aff9e1c0_%D0%91%D0%B5%D0%B7%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-2.png',
  },
  {
    url: 'https://cdn.mediapark.uz/images/31344135-65fa-4766-8881-6534aff9e1c0_%D0%91%D0%B5%D0%B7%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-2.png',
  },
];

export const bannerData: ISlide[] = [
  {
    url: 'https://assets.chakana.uz/banner/middle//6549d122860d9.webp',
  },
  {
    url: 'https://assets.chakana.uz/banner/middle//6549d122860d9.webp',
  },
  {
    url: 'https://assets.chakana.uz/banner/middle//6549d122860d9.webp',
  },
  {
    url: 'https://assets.chakana.uz/banner/middle//6549d122860d9.webp',
  },
  {
    url: 'https://assets.chakana.uz/banner/middle//6549d122860d9.webp',
  },
];

export const brandData: ISliderBrands[] = [
  {
    url: check_file,
    title: "Muddatli to'lovga sotib olish",
    description: "Biz sizga muddatli to'lov imkoniyatini taklif qilamiz.",
  },
  {
    url: delivery,
    title: 'Sifatli yetkazib berish',
    description: 'Buyurtmangizni ishonchli va xavfsiz yetkazib beriladi.',
  },
  {
    url: guarantee,
    title: 'Mahsulot uchun kafolat',
    description: 'Mahsulot uchun 30 kundan 100 kungacha sifat kafolati.',
  },
  {
    url: change_icon,
    title: 'Siz uchun qulayliklar',
    description: 'Mahsulotda nosozlik bo‘lganda boshqasiga alishtirish imkoni.',
  },
  {
    url: faq,
    title: 'Yordam markazi',
    description: 'Sizning savollaringizga 24/7 yordam berishga tayyormiz.',
  },
];

export const popularCategoriesData: IPopularCategory[] = [
  {
    icon: 'https://cdn.mediapark.uz/imgs/02ccd425-36d9-41d7-9718-c74e52bbe13a_%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C5.webp',
    text: 'Smartfonlar',
  },
  {
    icon: 'https://cdn.mediapark.uz/imgs/27925aad-3b38-4ca6-898e-48927c51bd20_1_@1300.webp',
    text: 'iPhone',
  },
  {
    icon: 'https://cdn.mediapark.uz/imgs/061f70c3-d187-45ab-9552-46f26f15ae46.webp',
    text: 'Windows',
  },
  {
    icon: 'https://cdn.mediapark.uz/imgs/e309f284-48b3-460b-a5fe-9d50ea99c21f_%D0%9C%D0%BE%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D0%B0%D1%8F%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C8.webp',
    text: 'Planshetlar',
  },
  {
    icon: 'https://cdn.mediapark.uz/imgs/061f70c3-d187-45ab-9552-46f26f15ae46.webp',
    text: 'Windows',
  },
  {
    icon: 'https://cdn.mediapark.uz/imgs/27925aad-3b38-4ca6-898e-48927c51bd20_1_@1300.webp',
    text: 'iPhone',
  },
];
