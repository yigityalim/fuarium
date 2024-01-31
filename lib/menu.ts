import { v4 } from 'uuid'
import { Menu } from '@/lib/types/menu'
import { useLocale } from '@/hooks/use-locale'

// TODO - burada şöyle bir logic olmalı: alt menülerde title yoksa, üst menüdeki title kullanılmalı
// FIXME - "_" ile işaretlenmiş menüler aslında title etiketine sahip olmayacak, sadece children olacak. veya buna mantıklı bir çözüm bul.

export type { Menu }
export const menus: Menu[] = [
    {
        id: v4(),
        url: '/',
        title: {
            tr: 'Anasayfa',
            en: 'Homepage',
            de: 'Homepage',
        },
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
    },
    {
        id: v4(),
        url: '/about',
        title: {
            tr: 'Hakkımızda',
            en: 'About Us',
            de: 'About Us',
        },
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        id: v4(),
        url: '/fair-supports',
        title: {
            tr: 'Fuar Destekleri',
            en: 'Fair Supports',
            de: 'Fair Supports',
        },
        children: [
            {
                id: v4(),
                url: '/fair-supports/:category',
                title: {
                    tr: '_category',
                    en: '_category',
                    de: '_category',
                },
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8,
            },
        ],
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        id: v4(),
        url: '/fair-tours',
        title: {
            tr: 'Fuar Turları',
            en: 'Fair Tours',
            de: 'Fair Tours',
        },
        children: [
            {
                id: v4(),
                url: '/fair-tours/:category',
                title: {
                    tr: '_category',
                    en: '_category',
                    de: '_category',
                },
                children: [
                    {
                        id: v4(),
                        url: '/fair-tours/:category/:fair',
                        title: {
                            tr: '_fair',
                            en: '_fair',
                            de: '_fair',
                        },
                        lastModified: new Date(),
                        changeFrequency: 'monthly',
                        priority: 0.8,
                    },
                ],
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.8,
            },
        ],
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        id: v4(),
        url: '/visa-consultancy',
        title: {
            tr: 'Vize Danışmanlığı',
            en: 'Visa Consultancy',
            de: 'Visa Consultancy',
        },
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        id: v4(),
        url: '/contact',
        title: {
            tr: 'İletişim',
            en: 'Contact',
            de: 'Contact',
        },
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
]
