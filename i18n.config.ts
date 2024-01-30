const i18n = {
    defaultLocale: 'tr',
    locales: ['tr', 'de', 'en'],
} as const

type Locale = (typeof i18n)['locales'][number]

export default i18n
export type { Locale }
