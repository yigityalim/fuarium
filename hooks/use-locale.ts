'use client'
import { usePathname } from 'next/navigation'
import i18n, { Locale } from '@/i18n.config'

/**
 * Returns the string that matches the current locale.
 * @param strings
 * @param forceLocale
 * @example
 * const locale = useLocale(['türkçe yazı', 'english text', 'deutscher text'])
 * @returns {string}
 */
function useLocale(strings: string[], forceLocale?: Locale): string {
    const pathname = usePathname()
    const currentLocale = pathname.split('/')[1] as Locale
    const locale = forceLocale || currentLocale
    const index = i18n.locales.findIndex((l) => l === locale)
    return strings[index]
}

function useLocaleObject<T>(object: Record<Locale, T>, forceLocale?: Locale): T {
    const currentLocale = usePathname().split('/')[1] as Locale
    const locale = forceLocale || currentLocale
    return object[locale]
}

export { useLocale, useLocaleObject }
