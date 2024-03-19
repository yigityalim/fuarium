export interface FairSupport {
    id: string
    title: string
    href: string
    description: string
    bannerImage: string
    body: {
        id: string
        title: string
        content: string[]
    }[]
}

export const fairSupports = [
    {
        id: 'Devlet Destekleri',
        title: 'Devlet Destekleri',
        href: '/fair-supports/state-supports',
        description: 'Devlet destekleri hakkında bilgi almak için tıklayınız.',
        bannerImage: 'https://fuarium.de/siteyedegii/files/fuar_destekleri/devlet_destek_hizmet.jpg',
        body: [
            {
                id: 'yurt-disi-arastirma-yurt-disi-fuar',
                title: 'Yurt Dışı Pazar Araştırma - Yurt Dışı Fuarı',
                content: [
                    'Firmaların üretim ve ihracattaki performansı Türkiye ekonomisinin kalkınması için  büyük önem taşır. Yurt dışı pazarında söz sahibi olmak, ihracatınızı artırmak için öncelikle hedef pazarın ve rakiplerin tanınması, yeni teknolojilere uyum sağlanması ve sektörel analizin iyi yapılması gerekiyor. İlgili sektöre yönelik yurt dışı fuar gezileri ise bu kapsamda önemli bir rol oynar.',
                    'Fuarium, uluslararası platformda kazanmış olduğu deneyimleriyle dış ticaret analizi, yurt dışı pazar araştırmasıyla yurt dışında devlet destekli ve düşük maliyetli fuar organizasyonları gerçekleştirmektedir.',
                    'KOSGEB ve Ekonomi Bakanlığı’nın Pazar Araştırması ve Pazara Giriş desteklerinden faydalanmak isteyen firmalara dosya hazırlama hizmetlerinden, gerekli evrakların toplanmasına ve katılımcı firmanın teşvik alabilmesi için tam zamanında başvuruların yapılmasına kadar tüm süreci sizin için yönetiyor, size özel paket programlar sunuyoruz.',
                ],
            },
            {
                id: 'sektorel-ticaret-heyeti-destegi',
                title: 'Sektörel Ticaret Heyeti Desteği',
                content: [
                    "Yeni pazarlar keşfetmek ve yurt dışındaki şirketlerle bağlantı kurmak için Sektörel Ticaret Heyeti'ne katılan firmalara sağlanan devlet desteği kapsamında taraflar arasındaki tüm organizasyon akışını yönetiyoruz. Türkiye’deki seyahat acenteleri, KOBİ'ler ve meslek odalarını, Almanya’daki meslek örgütleri ve firmalarıyla bir araya getiriyor, yeni iş ilişkileri kurulmasına olanak sağlıyoruz.",
                ],
            },
        ],
    },
    {
        id: 'Fabrika - Tesis Ziyaretleri',
        title: 'Fabrika - Tesis Ziyaretleri',
        href: '/fair-supports/factory-plant-visits',
        description: 'Fabrika ve tesis ziyaretleri hakkında bilgi almak için tıklayınız.',
        bannerImage: 'https://fuarium.de/siteyedegii/files/fuar_destekleri/ctm_fabrika_1.jpg',
        body: [
            {
                id: 'fabrika-tesis-ziyaretleri',
                title: 'Fabrika - Tesis Ziyaretleri',
                content: [
                    'Fuarium, Türkiye’deki firmaların Almanya’daki fabrika ve tesisleri ziyaret etmeleri için özel programlar düzenlemektedir. Bu programlar kapsamında, katılımcı firmaların ihtiyaçlarına göre özel olarak hazırlanan ziyaret programları sayesinde, katılımcı firmaların Almanya’daki firmalarla tanışmaları, işbirliği fırsatlarını değerlendirmeleri ve yeni iş ilişkileri kurmaları hedeflenmektedir.',
                ],
            },
        ],
    },
] as FairSupport[] satisfies FairSupport[]
