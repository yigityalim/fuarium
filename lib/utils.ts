import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format } from 'date-fns'
import { tr } from 'date-fns/locale'

export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs))
}

export function formatDate(date: Date | number | string) {
    return format(new Date(date), 'd MMMM yyyy', { locale: tr })
}

export function formatCurrency(amount: number, currency: string) {
    return new Intl.NumberFormat('tr_TR', {
        style: 'currency',
        currency,
    }).format(amount)
}
