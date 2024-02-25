import { TLocale } from '@/types'
import 'server-only'

const locales = {
  uz: () => import('@/locales/uz.json').then((module) => module.default),
  ru: () => import('@/locales/ru.json').then((module) => module.default),
  cyr: () => import('@/locales/cyr.json').then((module) => module.default),
}

export const getLocale = async (locale: TLocale) => locales[locale]()
