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
    {
        id: 'Dernek Ziyaretleri',
        title: 'Dernek Ziyaretleri',
        href: '/fair-supports/association-visits',
        description: 'Dernek ziyaretleri hakkında bilgi almak için tıklayınız.',
        bannerImage: 'https://fuarium.de/siteyedegii/files/dernek/dernek_yeni.jpg',
        body: [
            {
                id: 'sektorunde-faaliyet-gosteren-dernek-federasyon-ve-stklarla-bir-arada-olma-firsati',
                title: "SEKTÖRÜNDE FAALİYET GÖSTEREN DERNEK, FEDERASYON VE STK'LARLA BİR ARADA OLMA FIRSATI...",
                content: [
                    'Yurt dışı iş seyahati organizasyonlarınızda ilgili sektörünüze yönelik hedef kitleler, doğru kaynaklar ile sizleri buluşturuyor, yurt dışı fuar dernek ziyaretleri ile yeni iş fırsatlarınız için doğru bilgi alışverişi sağlamanızı önemsiyoruz. Bu kapsamda toplantılarınızı büyük bir titizlikle sizlerle planlıyor ve sizi doğru hedefler, doğru strateji ile sektörünüzün kalbine taşıyoruz.',
                ],
            },
        ],
    },
    {
        id: 'B2B - B2C Görüşmeler',
        title: 'B2B - B2C Görüşmeler',
        href: '/fair-supports/b2b-b2c-meetings',
        description: 'B2B ve B2C görüşmeleri hakkında bilgi almak için tıklayınız.',
        bannerImage: 'https://fuarium.de/siteyedegii/files/fuar_destekleri/ctm_b2b_2.jpg',
        body: [
            {
                id: 'tum-dunya-ile-bir-araya-gelme-firsati',
                title: 'Tüm Dünya İle Bir Araya Gelme Fırsatı',
                content: [
                    'Yurtdışı Fuar B2B & B2C görüşme, toplantı organizasyonları, toplantı salonu, ekipman kiralama ve ikram hizmetleri ile anahtar teslim organizasyon paketlerimizle sizlere hizmet vermekten memnuniyet duyuyoruz.',
                ],
            },
            {
                id: 'ekonomi-bakanliginin-destekledigi-ikili-is-görüsmeleri',
                title: "Ekonomi Bakanlığı'nın Desteklediği İkili İş Görüşmeleri",
                content: [
                    'Ulusal ve uluslararası kongrelerle fuarlarda, doğru bağlantılar kurarak firmaların iş ağını genişletmek amacıyla resmi kurum ve kuruluşları, özel sektör profesyonelleri ve firmalarla görüşme talep etme imkânını sunan, Ekonomi Bakanlığı’nın desteklediği ikili iş görüşmelerini büyük bir titizlikle organize ediyoruz.',
                ],
            },
            {
                id: 'sonuc-odakli-is-gorusmeleri',
                title: 'Sonuç Odaklı İş Görüşmeleri',
                content: [
                    'Dünya ticaretinde sağlam bir yer edinmeyi hedefleyen firmalarınızın amaçları doğrultusunda, hedef pazar - hedef ülke ve hedef ziyaretçi mantığımızla sonuç odaklı ikili iş görüşmelerinizi gerçekleştiriyoruz. Firmalarınızın sektörel ihtiyaçlarını baz alarak yaptığımız çalışmalarla uluslararası pazarda söz sahibi yabancı firmalar ile eşleştirmelerinizi sağlıyoruz.',
                ],
            },
            {
                id: 'ulusal-ve-uluslararasi-alicilar-ve-yatirimcilarla-ikili-is-gorusmeleri',
                title: 'Ulusal ve Uluslararası Alıcılar ve Yatırımcılarla İkili İş Görüşmeleri',
                content: [
                    'Uluslararası pazarda yer alabilmek için doğru adımları sağlam atmanın gerekliliğini bilerek,  firmanızın ihtiyaçlarını ve pazar hedeflerini belirliyoruz. Firmalarınızın iş ağını genişletip, güçlendirmek amacıyla sizleri ulusal ve uluslararası alıcılar ve yatırımcılarla buluşturuyoruz.',
                ],
            },
        ],
    },
] as FairSupport[] satisfies FairSupport[]
