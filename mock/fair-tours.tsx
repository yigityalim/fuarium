import React from 'react'

export interface FairTour {
    id: string
    name: string
    fullName: string
    as: string
    href: string
    url: string
    date: {
        start: Date
        end: Date
    }
    country: string
    city: string
    turCode: string
    logo: React.ReactElement
    category: string
    hero: string
    images: string[]
    packages: {
        id: string
        name: string
        date: Date[]
        price: number
        currency: string
        description: string
    }[]
    price: {
        single: number
        double: number
        currency: string
    }
    flights: {
        from: {
            city: string
            airport: string
            date: Date
        }
        to: {
            city: string
            airport: string
            date: Date
        }
    }
    tourProgram: {
        id: string
        name: string
        date: Date
        about: string
    }[]
    conditions: string[]
    included: string[]
    excluded: string[]
}

const fairTours = [
    {
        id: 'iaa-fair',
        name: 'IAA',
        fullName: 'Internationale Automobil-Ausstellung',
        as: 'Otomotiv ve Yan Sanayi Fuarı',
        href: 'iaa',
        url: '/fair-tours/automobile/iaa',
        date: {
            start: new Date('2023-09-14'),
            end: new Date('2023-09-22'),
        },
        country: 'Germany',
        city: 'Frankfurt',
        turCode: 'TRR',
        logo: (
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 297.6378 175.74803' className='h-full w-full'>
                <path d='M43.58268,47.07937a1.37572,1.37572,0,0,1,1.44458-1.6124H61.33364a1.4415,1.4415,0,0,1,1.52335,1.6124v83.0661a1.43663,1.43663,0,0,1-1.52335,1.6016H45.02726a1.36811,1.36811,0,0,1-1.44458-1.6016V47.07937m112.60169,50.1961H105.96478c.3511-1.20365,5.94358-20.359,5.94358-20.359s2.09223-7.55755,2.78-10.07605c.72074,2.50614,2.91748,10.09973,2.91748,10.09973,0-.01287,5.40663,16.98491,5.40663,16.98491h19.69544l-14.4103-40.19091a14.23489,14.23489,0,0,0-13.77708-9.728,14.047,14.047,0,0,0-13.38067,9.56638l-26.2007,76.1464a1.56027,1.56027,0,0,0,.0206,1.50276,1.681,1.681,0,0,0,1.47135.52H93.84851a1.97818,1.97818,0,0,0,2.28013-1.54343c0-.01081,4.11959-13.879,4.83879-16.29712h60.935Zm-.74881,32.26L151.056,117.24979H130.37416l4.14172,12.77781a2.20445,2.20445,0,0,0,2.0984,1.71435h17.49717a1.49025,1.49025,0,0,0,1.252-.56888,1.74084,1.74084,0,0,0,.07208-1.63764m92.90146-32.26H198.11743c.35111-1.20365,5.94359-20.359,5.94359-20.359s2.09223-7.55755,2.78-10.07605c.72075,2.50614,2.91748,10.09973,2.91748,10.09973,0-.01287,5.40663,16.98491,5.40663,16.98491H234.8606L220.45029,53.73411a14.23488,14.23488,0,0,0-13.77708-9.728,14.047,14.047,0,0,0-13.38067,9.56638l-26.2007,76.1464a1.56032,1.56032,0,0,0,.0206,1.50276,1.681,1.681,0,0,0,1.47135.52h17.41737a1.97817,1.97817,0,0,0,2.28013-1.54343c0-.01081,4.11959-13.879,4.83879-16.29712h60.935Zm-.7488,32.26-4.37957-12.28564H222.52681l4.14172,12.77781a2.20446,2.20446,0,0,0,2.09841,1.71435H246.2641a1.49029,1.49029,0,0,0,1.252-.56888,1.74087,1.74087,0,0,0,.07208-1.63764' />
            </svg>
        ),
        category: 'automobile',
        hero: 'https://fuarium.de/siteyedegii/files/fuarlar_1/iaa/iaa_1.jpg',
        images: [
            'https://fuarium.de/siteyedegii/files/fuarlar_1/iaa/iaa_1.jpg',
            'https://fuarium.de/siteyedegii/files/fuarlar_1/iaa/iaa_2.jpg',
            'https://fuarium.de/siteyedegii/files/fuarlar_1/iaa/iaa_3.jpg',
            'https://fuarium.de/siteyedegii/files/fuarlar_1/iaa/iaa_4.jpg',
        ],
        packages: [
            // mantık yanlış. buradaki paketler gün olarak değil içerik olarak değiştirilecek. yani bir pakette yemek olurken diğerinde ulaşım olabilir.
            {
                id: 'iaa-1',
                name: 'IAA 1',
                date: [new Date('2023-09-14'), new Date('2023-09-17')],
                price: 400,
                currency: 'EUR',
                description: 'IAA 1 paketi açıklaması',
            },
            {
                id: 'iaa-2',
                name: 'IAA 2',
                date: [new Date('2023-09-20'), new Date('2023-09-22')],
                price: 400,
                currency: 'EUR',
                description: 'IAA 2 paketi açıklaması',
            },
        ],
        price: {
            single: 1200,
            double: 2400,
            currency: 'EUR',
        },
        flights: {
            from: {
                city: 'Istanbul',
                airport: 'IST',
                date: new Date('2023-09-14 10:00'),
            },
            to: {
                city: 'Frankfurt',
                airport: 'FRA',
                date: new Date('2023-09-22 12:00'),
            },
        },
        tourProgram: [
            {
                id: 'iaa-1',
                name: '1. Gün',
                date: new Date('2023-09-14'),
                about: 'Buluşma ve transfer aracımız ile Türkiye’den Frankfurt’a hareket. Yurtdışı Havalimanına varış, check-in işlemleri, otelimize transfer. ve serbest zaman.',
            },
            {
                id: 'iaa-2',
                name: '2. Gün',
                date: new Date('2023-09-15'),
                about: 'Sabah kahvaltısının ardından transfer aracımız ile iş adamları derneği ziyareti. Toplantı ve B2B görüşmeleri. Dernekten ayrılış ve transfer aracımız ile otelimize hareket',
            },
            {
                id: 'iaa-3',
                name: '3. Gün',
                date: new Date('2023-09-16'),
                about: 'Sabah kahvaltısının ardından transfer aracımız ile IAA fuar alanına hareket. Fuar alanında serbest zaman. Akşam saatlerinde otelimize transfer.',
            },
            {
                id: 'iaa-4',
                name: '4. Gün',
                date: new Date('2023-09-17'),
                about: 'Sabah kahvaltısının ardından transfer aracımız ile IAA fuar alanına hareket. Fuar alanında serbest zaman. Akşam saatlerinde otelimize transfer.',
            },
            {
                id: 'iaa-5',
                name: '5. Gün',
                date: new Date('2023-09-18'),
                about: 'Sabah kahvaltısının ardından transfer aracımız ile iş adamları derneği ziyareti. Toplantı ve B2B görüşmeleri. Dernekten ayrılış ve transfer aracımız ile otelimize hareket',
            },
            {
                id: 'iaa-6',
                name: '6. Gün',
                date: new Date('2023-09-19'),
                about: 'Sabah kahvaltısının ardından serbest zaman. Akşam saatlerinde otelimize transfer.',
            },
            {
                id: 'iaa-7',
                name: '7. Gün',
                date: new Date('2023-09-20'),
                about: 'Sabah kahvaltısının ardından transfer aracımız ile IAA fuar alanına hareket. Fuar alanında serbest zaman. Akşam saatlerinde otelimize transfer.',
            },
            {
                id: 'iaa-8',
                name: '8. Gün',
                date: new Date('2023-09-21'),
                about: 'Sabah kahvaltısının ardından transfer aracımız ile IAA fuar alanına hareket. Fuar alanında serbest zaman. Akşam saatlerinde otelimize transfer.',
            },
            {
                id: 'iaa-9',
                name: '9. Gün',
                date: new Date('2023-09-22'),
                about: 'Sabah kahvaltısının ardından otelden çıkış işlemleri ve havalimanına transfer. Türkiye’ye hareket.',
            },
        ],
        conditions: [
            'Fiyatlarımız kişi başıdır.',
            'Fiyatlarımız 2 kişilik odada kişi başı konaklamalıdır.',
            'Fuar tarihlerindeki yoğunluk ve doluluk durumuna göre fiyatlarımızda değişiklik olabilir.',
            'Fiyatlarımızda uçak bileti bulunmamaktadır.',
            'Fuar tarihlerindeki yoğunluk ve doluluk durumuna göre fiyatlarımızda değişiklik olabilir.',
            'Fiyatlarımızda uçak bileti bulunmamaktadır.',
            'Fuar tarihlerindeki yoğunluk ve doluluk durumuna göre fiyatlarımızda değişiklik olabilir.',
            'Fiyatlarımızda uçak bileti bulunmamaktadır.',
        ],
        included: [
            '3 gece konaklama',
            'Sabah kahvaltısı',
            'Transferler',
            'Fuar giriş bileti',
            'Türkçe rehberlik hizmeti',
        ],
        excluded: [
            'Vize ücreti',
            'Yurtdışı çıkış harcı',
            'Seyahat sağlık sigortası',
            'Yurtdışı çıkış harcı',
            'Seyahat sağlık sigortası',
        ],
    },
    {
        id: 'anuga-fair',
        name: 'ANUGA',
        fullName: 'Anuga FoodTec',
        as: 'Gıda Teknolojileri Fuarı',
        href: 'anuga',
        url: '/fair-tours/food/anuga',
        date: {
            start: new Date('2023-12-14'),
            end: new Date('2023-12-22'),
        },
        country: 'Germany',
        city: 'Cologne',
        turCode: 'TRR',
        logo: (
            <svg xmlns='http://www.w3.org/2000/svg' version='1.1' x='0px' y='0px' viewBox='0 0 652 652'>
                <g>
                    <path
                        style={{
                            fill: '#E5001F',
                        }}
                        d='M191.7,523.4l-0.1,20c-7.7,1.3-19.3-3.8-22.2-11c-2.9-7.3-5.5-20.7-8-27.5c-3.6-10.1-7.2-18.1-18.8-18.1   c-9.6,0-17.6,8.3-17.6,18.2c0,12.6,15.3,24,29.1,13.8l13.2,14.3c-5.7,5.6-12.1,12.1-25.2,11.5c-22.9-1.1-38.8-18.1-38.7-39.8   c0.1-21.3,17-39,38.3-39c22.2,0,35.1,13,39.4,31.8c0.9,3.9,4.3,20.8,5.8,22.9C188.2,522.6,190.1,523.6,191.7,523.4'
                    />
                    <path
                        style={{
                            fill: 'none',
                            stroke: '#E5001F',
                            strokeWidth: 1.4491,
                            strokeMiterlimit: 3.864,
                        }}
                        d='M191.7,523.4l-0.1,20c-7.7,1.3-19.3-3.8-22.2-11c-2.9-7.3-5.5-20.7-8-27.5c-3.6-10.1-7.2-18.1-18.8-18.1   c-9.6,0-17.6,8.3-17.6,18.2c0,12.6,15.3,24,29.1,13.8l13.2,14.3c-5.7,5.6-12.1,12.1-25.2,11.5c-22.9-1.1-38.8-18.1-38.7-39.8   c0.1-21.3,17-39,38.3-39c22.2,0,35.1,13,39.4,31.8c0.9,3.9,4.3,20.8,5.8,22.9C188.2,522.6,190.1,523.6,191.7,523.4z'
                    />
                    <path
                        style={{
                            fill: '#E5001F',
                        }}
                        d='M197.7,543.1v-44.2c1.4-18.6,18.6-33,38.4-33.1c20.2-0.1,37.7,12.3,39.1,33.9v43.5h-20.3v-37.5   c-1.4-12.2-7.5-19.2-17.9-19.6c-10.6-0.4-17.6,6.8-19.1,19.3v37.7H197.7z'
                    />
                    <path
                        style={{
                            fill: 'none',
                            stroke: '#E5001F',
                            strokeWidth: 1.4491,
                            strokeMiterlimit: 3.864,
                        }}
                        d='M197.7,543.1v-44.2c1.4-18.6,18.6-33,38.4-33.1c20.2-0.1,37.7,12.3,39.1,33.9v43.5h-20.3v-37.5   c-1.4-12.2-7.5-19.2-17.9-19.6c-10.6-0.4-17.6,6.8-19.1,19.3v37.7H197.7z'
                    />
                    <path
                        style={{
                            fill: '#E5001F',
                        }}
                        d='M404.9,572.4c-16.7,0.1-28.3-9.6-32.6-14.2c0,0,8-7.7,15.2-13.5c18.1,17.4,34,1.7,34.8-7   c-0.7-6.5,0-23.4,0-32.7c0-9.1-7.2-19.2-18.8-19.2c-9.6,0-18.3,8.6-18.2,18.8c0.1,11.6,11.7,24.2,24,17.7l8.7,17.8   c-7.2,3.6-7.2,3.6-15.1,3.6c-22.9-0.1-38.7-18.1-38.7-39.8c0-21.3,17-39,38.3-39c22.2,0,40,15.4,40,38.8v34.6   C441,559.9,423,572.2,404.9,572.4'
                    />
                    <path
                        style={{
                            fill: 'none',
                            stroke: '#E5001F',
                            strokeWidth: 1.4491,
                            strokeMiterlimit: 3.864,
                        }}
                        d='M404.9,572.4c-16.7,0.1-28.3-9.6-32.6-14.2c0,0,8-7.7,15.2-13.5c18.1,17.4,34,1.7,34.8-7   c-0.7-6.5,0-23.4,0-32.7c0-9.1-7.2-19.2-18.8-19.2c-9.6,0-18.3,8.6-18.2,18.8c0.1,11.6,11.7,24.2,24,17.7l8.7,17.8   c-7.2,3.6-7.2,3.6-15.1,3.6c-22.9-0.1-38.7-18.1-38.7-39.8c0-21.3,17-39,38.3-39c22.2,0,40,15.4,40,38.8v34.6   C441,559.9,423,572.2,404.9,572.4z'
                    />
                    <path
                        style={{
                            fill: '#E5001F',
                        }}
                        d='M537.4,523.4l-0.1,20c-7.7,1.3-19.3-3.8-22.2-11c-2.9-7.3-5.5-20.7-8-27.5c-3.6-10.1-7.2-18.1-18.8-18.1   c-9.6,0-17.6,8.3-17.6,18.2c0,12.6,15.3,24,29.1,13.8l13.2,14.3c-5.7,5.6-12.1,12.1-25.2,11.5c-22.9-1.1-38.8-18.1-38.7-39.8   c0.1-21.3,17-39,38.3-39c22.2,0,35.1,13,39.4,31.8c0.9,3.9,4.3,20.8,5.8,22.9C533.9,522.6,535.8,523.6,537.4,523.4'
                    />
                    <path
                        style={{
                            fill: 'none',
                            stroke: '#E5001F',
                            strokeWidth: 1.4491,
                            strokeMiterlimit: 3.864,
                        }}
                        d='M537.4,523.4l-0.1,20c-7.7,1.3-19.3-3.8-22.2-11c-2.9-7.3-5.5-20.7-8-27.5c-3.6-10.1-7.2-18.1-18.8-18.1   c-9.6,0-17.6,8.3-17.6,18.2c0,12.6,15.3,24,29.1,13.8l13.2,14.3c-5.7,5.6-12.1,12.1-25.2,11.5c-22.9-1.1-38.8-18.1-38.7-39.8   c0.1-21.3,17-39,38.3-39c22.2,0,35.1,13,39.4,31.8c0.9,3.9,4.3,20.8,5.8,22.9C533.9,522.6,535.8,523.6,537.4,523.4z'
                    />
                    <path
                        style={{
                            fill: '#E5001F',
                        }}
                        d='M359.3,467.2v44.2c-1.4,18.6-18.6,32.9-38.4,33.1c-20.2,0.2-37.7-12.3-39.1-33.9v-43.5H302v37.5   c1.4,12.2,7.5,19.7,17.9,19.6c10.6,0,17.6-6.8,19.1-19.3v-37.7H359.3z'
                    />
                    <path
                        style={{
                            fill: 'none',
                            stroke: '#E5001F',
                            strokeWidth: 1.4491,
                            strokeMiterlimit: 3.864,
                        }}
                        d='M359.3,467.2v44.2c-1.4,18.6-18.6,32.9-38.4,33.1c-20.2,0.2-37.7-12.3-39.1-33.9v-43.5H302v37.5   c1.4,12.2,7.5,19.7,17.9,19.6c10.6,0,17.6-6.8,19.1-19.3v-37.7H359.3z'
                    />
                </g>
                <g>
                    <path
                        style={{
                            fillRule: 'evenodd',
                            clipRule: 'evenodd',
                            fill: '#E5001F',
                        }}
                        d='M533.1,388.2v66.9H515c-17.4-0.7-34.1-5.3-48.5-17.6c-11.3-9.6-18.3-25.3-22.5-44.2l-26.1-118.1   c0,15.3-2.8,24.9-8,38.4c-5.4,14.2-9.5,20.5-18.8,31.1l48.1,37.4c-27.1,40.8-81.6,74.6-145.1,74.1c-110.1-0.7-187.9-87.5-186.9-192   C108.1,161.5,189,76,291.9,76c107.2,0,173.1,68.1,192,174.6l19.6,98.5c4.3,16.7,5.1,26.8,12.3,33.3C521,387.2,526,388,533.1,388.2    M104.3,72.4h433.2V460H104.3V72.4z'
                    />
                    <path
                        style={{
                            fill: 'none',
                            stroke: '#E5001F',
                            strokeWidth: 1.4491,
                            strokeMiterlimit: 3.864,
                        }}
                        d='M533.1,388.2v66.9H515c-17.4-0.7-34.1-5.3-48.5-17.6c-11.3-9.6-18.3-25.3-22.5-44.2l-26.1-118.1   c0,15.3-2.8,24.9-8,38.4c-5.4,14.2-9.5,20.5-18.8,31.1l48.1,37.4c-27.1,40.8-81.6,74.6-145.1,74.1c-110.1-0.7-187.9-87.5-186.9-192   C108.1,161.5,189,76,291.9,76c107.2,0,173.1,68.1,192,174.6l19.6,98.5c4.3,16.7,5.1,26.8,12.3,33.3C521,387.2,526,388,533.1,388.2z    M104.3,72.4h433.2V460H104.3V72.4z'
                    />
                </g>
                <g>
                    <path
                        style={{
                            fill: '#E5001F',
                        }}
                        d='M175.3,265.8c0-66,53.5-119.5,119.5-119.5c66,0,119.4,53.5,119.4,119.5c0,66-53.5,119.5-119.4,119.5   C228.8,385.2,175.3,331.8,175.3,265.8'
                    />
                    <ellipse
                        style={{
                            fill: 'none',
                            stroke: '#E5001F',
                            strokeWidth: 1.4491,
                            strokeMiterlimit: 3.864,
                        }}
                        cx='294.8'
                        cy='265.8'
                        rx='119.5'
                        ry='119.5'
                    />
                    <path
                        style={{
                            fill: 'none',
                            stroke: '#FFFFFF',
                            strokeWidth: 1.4491,
                            strokeMiterlimit: 3.864,
                        }}
                        d='M295,146.9c38.3,19.1,59.2,67.3,59.2,119.2c0,52.1-19.2,99-59.2,119.7 M294.4,147.4v236.4 M294.8,146.3   c-38.3,19.1-59.2,67.3-59.2,119.2c0,52.1,19.2,99,59.2,119.7 M175.3,265.8h238.9 M294.4,146.2c54.7-4.7,114.1,54.9,114.1,119.3   c0,64.2-60,123.4-113.7,119.1 M294.4,146.3c42.5-3.5,105.4,54,104.8,119.2c-0.6,65.2-62.9,124.6-104.4,119.7 M294.4,146.3   c43.1-1.2,86.7,61.7,86.7,119.2c0,57.6-43.1,121.7-86.3,119.7'
                    />
                </g>
            </svg>
        ),
        category: 'food',
        hero: 'https://fuarium.de/siteyedegii/files/fuarlar_2/anuga1.jpg',
        images: [
            'https://fuarium.de/siteyedegii/files/fuarlar_2/anuga1.jpg',
            'https://fuarium.de/siteyedegii/files/fuarlar_2/anuga2.jpg',
            'https://fuarium.de/siteyedegii/files/fuarlar_2/anuga3.jpg',
            'https://fuarium.de/siteyedegii/files/fuarlar_2/anuga4.jpg',
        ],
        packages: [
            // mantık yanlış. buradaki paketler gün olarak değil içerik olarak değiştirilecek. yani bir pakette yemek olurken diğerinde ulaşım olabilir.
            {
                id: 'iaa-1',
                name: 'Anuga 1',
                date: [new Date('2023-09-14'), new Date('2023-09-17')],
                price: 400,
                currency: 'EUR',
                description: 'Anuga 1 paketi açıklaması',
            },
            {
                id: 'iaa-2',
                name: 'Anuga 2',
                date: [new Date('2023-09-20'), new Date('2023-09-22')],
                price: 400,
                currency: 'EUR',
                description: 'Anuga 2 paketi açıklaması',
            },
        ],
        price: {
            single: 1200,
            double: 2400,
            currency: 'EUR',
        },
        flights: {
            from: {
                city: 'Istanbul',
                airport: 'IST',
                date: new Date('2023-09-14 10:00'),
            },
            to: {
                city: 'Frankfurt',
                airport: 'FRA',
                date: new Date('2023-09-22 12:00'),
            },
        },
        tourProgram: [
            {
                id: 'iaa-1',
                name: '1. Gün',
                date: new Date('2023-09-14'),
                about: 'Buluşma ve transfer aracımız ile Türkiye’den Frankfurt’a hareket. Yurtdışı Havalimanına varış, check-in işlemleri, otelimize transfer. ve serbest zaman.',
            },
            {
                id: 'iaa-2',
                name: '2. Gün',
                date: new Date('2023-09-15'),
                about: 'Sabah kahvaltısının ardından transfer aracımız ile iş adamları derneği ziyareti. Toplantı ve B2B görüşmeleri. Dernekten ayrılış ve transfer aracımız ile otelimize hareket',
            },
            {
                id: 'iaa-3',
                name: '3. Gün',
                date: new Date('2023-09-16'),
                about: 'Sabah kahvaltısının ardından transfer aracımız ile IAA fuar alanına hareket. Fuar alanında serbest zaman. Akşam saatlerinde otelimize transfer.',
            },
            {
                id: 'iaa-4',
                name: '4. Gün',
                date: new Date('2023-09-17'),
                about: 'Sabah kahvaltısının ardından transfer aracımız ile IAA fuar alanına hareket. Fuar alanında serbest zaman. Akşam saatlerinde otelimize transfer.',
            },
            {
                id: 'iaa-5',
                name: '5. Gün',
                date: new Date('2023-09-18'),
                about: 'Sabah kahvaltısının ardından transfer aracımız ile iş adamları derneği ziyareti. Toplantı ve B2B görüşmeleri. Dernekten ayrılış ve transfer aracımız ile otelimize hareket',
            },
            {
                id: 'iaa-6',
                name: '6. Gün',
                date: new Date('2023-09-19'),
                about: 'Sabah kahvaltısının ardından serbest zaman. Akşam saatlerinde otelimize transfer.',
            },
            {
                id: 'iaa-7',
                name: '7. Gün',
                date: new Date('2023-09-20'),
                about: 'Sabah kahvaltısının ardından transfer aracımız ile IAA fuar alanına hareket. Fuar alanında serbest zaman. Akşam saatlerinde otelimize transfer.',
            },
            {
                id: 'iaa-8',
                name: '8. Gün',
                date: new Date('2023-09-21'),
                about: 'Sabah kahvaltısının ardından transfer aracımız ile IAA fuar alanına hareket. Fuar alanında serbest zaman. Akşam saatlerinde otelimize transfer.',
            },
            {
                id: 'iaa-9',
                name: '9. Gün',
                date: new Date('2023-09-22'),
                about: 'Sabah kahvaltısının ardından otelden çıkış işlemleri ve havalimanına transfer. Türkiye’ye hareket.',
            },
        ],
        conditions: [
            'Fiyatlarımız kişi başıdır.',
            'Fiyatlarımız 2 kişilik odada kişi başı konaklamalıdır.',
            'Fuar tarihlerindeki yoğunluk ve doluluk durumuna göre fiyatlarımızda değişiklik olabilir.',
            'Fiyatlarımızda uçak bileti bulunmamaktadır.',
            'Fuar tarihlerindeki yoğunluk ve doluluk durumuna göre fiyatlarımızda değişiklik olabilir.',
            'Fiyatlarımızda uçak bileti bulunmamaktadır.',
            'Fuar tarihlerindeki yoğunluk ve doluluk durumuna göre fiyatlarımızda değişiklik olabilir.',
            'Fiyatlarımızda uçak bileti bulunmamaktadır.',
        ],
        included: [
            '3 gece konaklama',
            'Sabah kahvaltısı',
            'Transferler',
            'Fuar giriş bileti',
            'Türkçe rehberlik hizmeti',
        ],
        excluded: [
            'Vize ücreti',
            'Yurtdışı çıkış harcı',
            'Seyahat sağlık sigortası',
            'Yurtdışı çıkış harcı',
            'Seyahat sağlık sigortası',
        ],
    },
] as FairTour[] satisfies FairTour[]

export { fairTours }

/*
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="layer" x="0px" y="0px" viewBox="0 0 652 652" style="enable-background:new 0 0 652 652;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#E5001F;}
	.st1{fill:none;stroke:#E5001F;stroke-width:1.4491;stroke-miterlimit:3.864;}
	.st2{fill-rule:evenodd;clip-rule:evenodd;fill:#E5001F;}
	.st3{fill:none;stroke:#E5001F;stroke-width:3.4928;stroke-miterlimit:3.864;}
	.st4{fill:none;stroke:#FFFFFF;stroke-width:3.4928;stroke-miterlimit:3.864;}
</style>
<g>
	<path class="st0" d="M191.7,523.4l-0.1,20c-7.7,1.3-19.3-3.8-22.2-11c-2.9-7.3-5.5-20.7-8-27.5c-3.6-10.1-7.2-18.1-18.8-18.1   c-9.6,0-17.6,8.3-17.6,18.2c0,12.6,15.3,24,29.1,13.8l13.2,14.3c-5.7,5.6-12.1,12.1-25.2,11.5c-22.9-1.1-38.8-18.1-38.7-39.8   c0.1-21.3,17-39,38.3-39c22.2,0,35.1,13,39.4,31.8c0.9,3.9,4.3,20.8,5.8,22.9C188.2,522.6,190.1,523.6,191.7,523.4"/>
	<path class="st1" d="M191.7,523.4l-0.1,20c-7.7,1.3-19.3-3.8-22.2-11c-2.9-7.3-5.5-20.7-8-27.5c-3.6-10.1-7.2-18.1-18.8-18.1   c-9.6,0-17.6,8.3-17.6,18.2c0,12.6,15.3,24,29.1,13.8l13.2,14.3c-5.7,5.6-12.1,12.1-25.2,11.5c-22.9-1.1-38.8-18.1-38.7-39.8   c0.1-21.3,17-39,38.3-39c22.2,0,35.1,13,39.4,31.8c0.9,3.9,4.3,20.8,5.8,22.9C188.2,522.6,190.1,523.6,191.7,523.4z"/>
	<path class="st0" d="M197.7,543.1v-44.2c1.4-18.6,18.6-33,38.4-33.1c20.2-0.1,37.7,12.3,39.1,33.9v43.5h-20.3v-37.5   c-1.4-12.2-7.5-19.2-17.9-19.6c-10.6-0.4-17.6,6.8-19.1,19.3v37.7H197.7z"/>
	<path class="st1" d="M197.7,543.1v-44.2c1.4-18.6,18.6-33,38.4-33.1c20.2-0.1,37.7,12.3,39.1,33.9v43.5h-20.3v-37.5   c-1.4-12.2-7.5-19.2-17.9-19.6c-10.6-0.4-17.6,6.8-19.1,19.3v37.7H197.7z"/>
	<path class="st0" d="M404.9,572.4c-16.7,0.1-28.3-9.6-32.6-14.2c0,0,8-7.7,15.2-13.5c18.1,17.4,34,1.7,34.8-7   c-0.7-6.5,0-23.4,0-32.7c0-9.1-7.2-19.2-18.8-19.2c-9.6,0-18.3,8.6-18.2,18.8c0.1,11.6,11.7,24.2,24,17.7l8.7,17.8   c-7.2,3.6-7.2,3.6-15.1,3.6c-22.9-0.1-38.7-18.1-38.7-39.8c0-21.3,17-39,38.3-39c22.2,0,40,15.4,40,38.8v34.6   C441,559.9,423,572.2,404.9,572.4"/>
	<path class="st1" d="M404.9,572.4c-16.7,0.1-28.3-9.6-32.6-14.2c0,0,8-7.7,15.2-13.5c18.1,17.4,34,1.7,34.8-7   c-0.7-6.5,0-23.4,0-32.7c0-9.1-7.2-19.2-18.8-19.2c-9.6,0-18.3,8.6-18.2,18.8c0.1,11.6,11.7,24.2,24,17.7l8.7,17.8   c-7.2,3.6-7.2,3.6-15.1,3.6c-22.9-0.1-38.7-18.1-38.7-39.8c0-21.3,17-39,38.3-39c22.2,0,40,15.4,40,38.8v34.6   C441,559.9,423,572.2,404.9,572.4z"/>
	<path class="st0" d="M537.4,523.4l-0.1,20c-7.7,1.3-19.3-3.8-22.2-11c-2.9-7.3-5.5-20.7-8-27.5c-3.6-10.1-7.2-18.1-18.8-18.1   c-9.6,0-17.6,8.3-17.6,18.2c0,12.6,15.3,24,29.1,13.8l13.2,14.3c-5.7,5.6-12.1,12.1-25.2,11.5c-22.9-1.1-38.8-18.1-38.7-39.8   c0.1-21.3,17-39,38.3-39c22.2,0,35.1,13,39.4,31.8c0.9,3.9,4.3,20.8,5.8,22.9C533.9,522.6,535.8,523.6,537.4,523.4"/>
	<path class="st1" d="M537.4,523.4l-0.1,20c-7.7,1.3-19.3-3.8-22.2-11c-2.9-7.3-5.5-20.7-8-27.5c-3.6-10.1-7.2-18.1-18.8-18.1   c-9.6,0-17.6,8.3-17.6,18.2c0,12.6,15.3,24,29.1,13.8l13.2,14.3c-5.7,5.6-12.1,12.1-25.2,11.5c-22.9-1.1-38.8-18.1-38.7-39.8   c0.1-21.3,17-39,38.3-39c22.2,0,35.1,13,39.4,31.8c0.9,3.9,4.3,20.8,5.8,22.9C533.9,522.6,535.8,523.6,537.4,523.4z"/>
	<path class="st0" d="M359.3,467.2v44.2c-1.4,18.6-18.6,32.9-38.4,33.1c-20.2,0.2-37.7-12.3-39.1-33.9v-43.5H302v37.5   c1.4,12.2,7.5,19.7,17.9,19.6c10.6,0,17.6-6.8,19.1-19.3v-37.7H359.3z"/>
	<path class="st1" d="M359.3,467.2v44.2c-1.4,18.6-18.6,32.9-38.4,33.1c-20.2,0.2-37.7-12.3-39.1-33.9v-43.5H302v37.5   c1.4,12.2,7.5,19.7,17.9,19.6c10.6,0,17.6-6.8,19.1-19.3v-37.7H359.3z"/>
</g>
<g>
	<path class="st2" d="M533.1,388.2v66.9H515c-17.4-0.7-34.1-5.3-48.5-17.6c-11.3-9.6-18.3-25.3-22.5-44.2l-26.1-118.1   c0,15.3-2.8,24.9-8,38.4c-5.4,14.2-9.5,20.5-18.8,31.1l48.1,37.4c-27.1,40.8-81.6,74.6-145.1,74.1c-110.1-0.7-187.9-87.5-186.9-192   C108.1,161.5,189,76,291.9,76c107.2,0,173.1,68.1,192,174.6l19.6,98.5c4.3,16.7,5.1,26.8,12.3,33.3C521,387.2,526,388,533.1,388.2    M104.3,72.4h433.2V460H104.3V72.4z"/>
	<path class="st1" d="M533.1,388.2v66.9H515c-17.4-0.7-34.1-5.3-48.5-17.6c-11.3-9.6-18.3-25.3-22.5-44.2l-26.1-118.1   c0,15.3-2.8,24.9-8,38.4c-5.4,14.2-9.5,20.5-18.8,31.1l48.1,37.4c-27.1,40.8-81.6,74.6-145.1,74.1c-110.1-0.7-187.9-87.5-186.9-192   C108.1,161.5,189,76,291.9,76c107.2,0,173.1,68.1,192,174.6l19.6,98.5c4.3,16.7,5.1,26.8,12.3,33.3C521,387.2,526,388,533.1,388.2z    M104.3,72.4h433.2V460H104.3V72.4z"/>
</g>
<g>
	<path class="st0" d="M175.3,265.8c0-66,53.5-119.5,119.5-119.5c66,0,119.4,53.5,119.4,119.5c0,66-53.5,119.5-119.4,119.5   C228.8,385.2,175.3,331.8,175.3,265.8"/>
	<ellipse class="st3" cx="294.8" cy="265.8" rx="119.5" ry="119.5"/>
	<path class="st4" d="M295,146.9c38.3,19.1,59.2,67.3,59.2,119.2c0,52.1-19.2,99-59.2,119.7 M294.4,147.4v236.4 M294.8,146.3   c-38.3,19.1-59.2,67.3-59.2,119.2c0,52.1,19.2,99,59.2,119.7 M175.3,265.8h238.9 M294.4,146.2c54.7-4.7,114.1,54.9,114.1,119.3   c0,64.2-60,123.4-113.7,119.1 M294.4,146.3c42.5-3.5,105.4,54,104.8,119.2c-0.6,65.2-62.9,124.6-104.4,119.7 M294.4,146.3   c43.1-1.2,86.7,61.7,86.7,119.2c0,57.6-43.1,121.7-86.3,119.7"/>
</g>
</svg>
 */
