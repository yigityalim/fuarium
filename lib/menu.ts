import { Menu } from '@/lib/types/menu'

// TODO - burada şöyle bir logic olmalı: alt menülerde title yoksa, üst menüdeki title kullanılmalı
// FIXME - "_" ile işaretlenmiş menüler aslında title etiketine sahip olmayacak, sadece children olacak. veya buna mantıklı bir çözüm bul.

const fairSupports = {
    id: 'fair-supports',
    url: '/fair-supports',
    title: 'Fuar Desteği',
    children: [
        {
            id: 'government-supports',
            url: '/fair-supports/government',
            title: 'Devlet Destekleri',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            id: 'factory-facility-visits',
            url: '/fair-supports/factory-facility-visits',
            title: 'Fabrika ve Tesis Ziyaretleri',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            id: 'association-visits',
            url: '/fair-supports/association-visits',
            title: 'Dernek Ziyaretleri',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            id: 'b2b-b2c-meetings',
            url: '/fair-supports/b2b-b2c-meetings',
            title: 'B2B ve B2C Görüşmeler',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ],
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
} as Menu satisfies Menu

const fairTours = {
    id: 'fair-tours',
    url: '/fair-tours',
    title: 'Fuar Turları',
    children: [
        {
            id: 'fair-tours-cars',
            url: '/fair-tours/automobile',
            title: 'Otomobil Fuarları',
            children: [
                {
                    id: 'iaa-fair',
                    url: '/fair-tours/autmobile/iaa',
                    title: 'IAA',
                    description: 'Otomotiv ve Yan Sanayi Fuarı',
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
            id: 'fair-tours-building',
            url: '/fair-tours/building',
            title: 'İnşaat Fuarları',
            children: [
                {
                    id: 'bauma-fair',
                    url: '/fair-tours/building/bauma',
                    title: 'BAUMA',
                    description: 'Yapı ve İnşaat Fuarı',
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
} as Menu satisfies Menu

const vizaConsultancy = {
    id: 'visa-consultancy',
    url: '/visa-consultancy',
    title: 'Vize Danışmanlığı',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
    children: [
        {
            id: 'visa-consultancy-country',
            url: '/visa-consultancy/italy',
            title: 'İtalya Vizesi',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            id: 'visa-consultancy-country',
            url: '/visa-consultancy/spain',
            title: 'İspanya Vizesi',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            id: 'visa-consultancy-country',
            url: '/visa-consultancy/germany',
            title: 'Almanya Vizesi',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            id: 'visa-consultancy-country',
            url: '/visa-consultancy/france',
            title: 'Fransa Vizesi',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ],
} as Menu satisfies Menu

const menus: Menu[] = [
    {
        id: 'anasayfa',
        url: '/',
        title: 'Anasayfa',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
    },
    {
        id: 'about',
        url: '/about',
        title: 'Hakkımızda',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    fairSupports,
    fairTours,
    vizaConsultancy,
    {
        id: 'contact',
        url: '/contact',
        title: 'İletişim',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
] as Menu[] satisfies Menu[]

export { menus, fairTours, fairSupports, vizaConsultancy }
export type { Menu }
