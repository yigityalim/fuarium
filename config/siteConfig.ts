const siteConfig = {
    name: 'fuarium',
    url: 'https://fuarium.com',
    keywords: ['catering', 'food', 'drink', 'event', 'party'],
    email: 'info@fuarium.eu',
    fullName: 'Vitiour Turizm San. ve Tic. A.Ş.',
    tel: '90 (0) 312 425 05 01 ',
    address: 'Kızılay Mh. Bayındır 2 Sokak No: 62 / 8 Çankaya / Ankara',
    ogImage: 'https://fuarium.com/og.jpg',
    description:
        'Kendi alanında uzman ekip arkadaşlarımız ile huzurunuzu ve konforunuzu güvence altına alıyoruz. Size düşen tek görev katılmak istediğiniz fuar organizasyonunu seçmek. Gitmek istediğiniz fuarı seçtikten sonra arkanıza yaslanın ve bırakın her ayrıntıyı sizin için biz düşünelim.',
    links: {
        twitter: 'https://twitter.com/fuarium',
    },
} as const

export type SiteConfig = typeof siteConfig
export { siteConfig }
