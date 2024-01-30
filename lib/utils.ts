import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import * as fns from 'date-fns'
import * as fnsLocale from 'date-fns/locale'
import type { Locale } from '@/i18n.config'

export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs))
}

export function formatDate(date: Date | number | string, format?: string, locale?: Locale) {
    return fns.format(new Date(date), format ?? 'dd.MM.yyyy', {
        locale: locale ? fnsLocale.tr : undefined,
    })
}

export function formatCurrency(amount: number, currency: string, locale?: Locale) {
    const getLocale = () => {
        switch (locale) {
            case 'de':
                return 'de-DE'
            case 'en':
                return 'en-US'
            default:
                return 'tr-TR'
        }
    }
    return new Intl.NumberFormat(getLocale(), {
        style: 'currency',
        currency,
    }).format(amount)
}

export function formatPhone(phone: string) {
    return phone.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4')
}
