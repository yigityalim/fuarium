

export const mockFairSupportsHomepage = [
    {
        id: 'government-supports',
        title: 'Devlet Destekleri',
        content: 'Fuarium olarak sizler için yurtdışı pazar araştırması kapsamında potansiyel müşterilerinizi en doğru şekilde analiz ediyoruz.',
        iconImage: 'https://fuarium.de/siteyedegii/files/fuar_destekleri/devlet_destekleri.png',
        href: '/fair-supports/government-supports'
    },
    {
        id: 'factory-supports',
        title: 'Fabrika Destekleri',
        content: 'İlgili sektörde faaliyet gösteren fabrika, üretim/depolama gezileri ile misafirlerimizi doğru kaynaklarla buluşturuyoruz.',
        iconImage: 'https://fuarium.de/siteyedegii/files/fuar_destekleri/fabrika_destekleri.png',
        href: '/fair-supports/factory-supports'
    },
    {
        id: 'association-supports',
        title: 'Dernek Destekleri',
        content: 'Yurtdışı organizasyonlarınızda ilgili sektörünüze yönelik hedef kitleler, doğru kaynaklar ile sizleri buluşturuyoruz.',
        iconImage: 'https://fuarium.de/siteyedegii/files/fuar_destekleri/dernek_ziyaretleri_1.png',
        href: '/fair-supports/association-supports'
    },
    {
        id: 'B2B-B2C-meetings',
        title: 'B2B - B2C Görüşme',
        content: 'Ulusal ve uluslararası kongre ve fuarlarda, Ekonomi Bakanlığı’nın desteklediği ikili iş görüşmelerini büyük bir titizlikle organize ediyoruz.',
        iconImage: 'https://fuarium.de/siteyedegii/files/fuar_destekleri/b2b_b2c_gorusme_1.png',
        href: '/fair-supports/b2b-b2c-meetings'
    }
] satisfies {
    id: string;
    title: string;
    content: string;
    iconImage: string;
    href: string;
}[]