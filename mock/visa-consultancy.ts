// TODO - next.config'i mock data reel data ile değiştiğinde güncelle

export const visaConsultancy = [
    {
        id: 'italy',
        country: 'İtalya',
        title: 'İtalya Vize Ayrıntıları',
        image: 'https://fuarium.de/siteyedegii/files/vize_ust/italy.jpg',
        href: '/visa-consultancy/italy',
        bannerImage:
            'https://www.freewebheaders.com/wp-content/gallery/travel-world-size-800x200_1/grand-triumphal-colosseum-rome-italy-banner_size-800x200.jpg',
        description: 'İtalya vizesi almak isteyenlerin dikkat etmesi gereken noktaları bu yazımızda bulabilirsiniz.',
        data: {
            title: 'Aşağıda bulunan evrak listesi İtalya Büyükelçiliği / Konsolosluklarının ilan ettiği 2017 yılı güncel evrak listesidir.',
            list: [
                {
                    title: 'Başvuru Formu: ',
                    description:
                        ' Vize başvurusunda bulunan her bir birey için (küçük çocuklar dahil) ayrı ayrı olarak doldurulup başvuru sahipleri tarafından imzalanmış başvuru formu gerekmektedir. Başvuru formu İtalya Konsolosluğu resmi web sitesinden temin edilebilir.',
                },
                {
                    title: 'Pasaport Aslı ve Fotokopisi: ',
                    description:
                        ' Pasaportunuz talep edilen vizenin bitiş tarihinden itibaren en az 3 ay daha geçerli olmalıdır. Pasaportunuzda en az 2 adet boş sayfası olmalıdır. Pasaportun aslı (var ise eski pasaportlarla birlikte) başvuru esnasında ibraz edilmelidir. Pasaportun fotokopisi de başvuru dosyasına eklenmelidir.',
                },
            ],
        },
        passport: {
            passport: 'Pasaport- 90 Güne kadar',
            service: 'Hizmet Pasaportu- 90 Güne kadar',
            diplomatic: 'Diplomatik Pasaport- 90 Güne kadar',
            special: 'Hususi Pasaport- 90 Güne kadar',
        },
    },
    {
        id: 'france',
        country: 'Fransa',
        title: 'Fransa Vize Ayrıntıları',
        image: 'https://fuarium.de/siteyedegii/files/vize_ust/paris.jpg',
        href: '/visa-consultancy/france',
        bannerImage:
            'https://www.freewebheaders.com/wp-content/gallery/travel-world-size-800x200_1/grand-triumphal-colosseum-rome-italy-banner_size-800x200.jpg',
        description: 'Fransa vizesi almak isteyenlerin dikkat etmesi gereken noktaları bu yazımızda bulabilirsiniz.',
        data: {
            title: 'Aşağıda bulunan evrak listesi Fransa Büyükelçiliği / Konsolosluklarının ilan ettiği 2017 yılı güncel evrak listesidir.',
            list: [
                {
                    title: 'Başvuru Formu: ',
                    description:
                        ' Vize başvurusunda bulunan her bir birey için (küçük çocuklar dahil) ayrı ayrı olarak doldurulup başvuru sahipleri tarafından imzalanmış başvuru formu gerekmektedir. Başvuru formu Fransa Konsolosluğu resmi web sitesinden temin edilebilir.',
                },
            ],
        },
        passport: {
            passport: 'Pasaport- 90 Güne kadar',
            service: 'Hizmet Pasaportu- 90 Güne kadar',
            diplomatic: 'Diplomatik Pasaport- 90 Güne kadar',
            special: 'Hususi Pasaport- 90 Güne kadar',
        },
    },
] as const
