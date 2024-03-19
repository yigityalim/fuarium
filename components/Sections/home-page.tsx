'use client'
import React from 'react'
import { Container } from '@/components/Containers'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { fairTours } from '@/mock/fair-tours'
import { FairToursCard } from '@/components/Cards/fair-tours'
import { cn } from '@/lib/utils'
import { mockFairSupportsHomepage } from '@/mock/fair-supports-homepage'
import Link from 'next/link'
import { buttonVariants } from '../ui/button'

export function HomePage() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)

    React.useEffect(() => {
        if (!api) return
        setCurrent(api.selectedScrollSnap() + 1)
        api.on('select', (): void => setCurrent(api.selectedScrollSnap() + 1))
    }, [api])

    const texts = [
        {
            id: 'first-carousel-item',
            title: '15 Yıllık Tecrübe',
            description: 'Almanya fuarları içi doğru adres',
            banner: 'https://fuarium.de/siteyedegii/files/slaytlar/fuarium_web_anasayfa_5.jpg',
        },
        {
            id: 'second-carousel-item',
            title: 'Fuar organizasyonlarınız için her ayrıntıyı;',
            description: 'sizin için düşünüyor ve organize ediyoruz',
            banner: 'https://fuarium.de/siteyedegii/files/slaytlar/fuarium_web_anasayfa_1.jpg',
        },
        {
            id: 'third-carousel-item',
            title: 'Fuarlara katılmak',
            description: 'Fuarium ile çok kolay!',
            banner: 'https://fuarium.de/siteyedegii/files/slaytlar/fuarium_web_anasayfa_2.jpg',
        },
    ] as const

    return (
        <>
            <Carousel
                className='w-full p-0 pt-[72px] md:pt-0'
                setApi={setApi}
                plugins={[
                    Autoplay({
                        delay: 10000,
                    }),
                ]}
            >
                <CarouselContent>
                    {texts.map((text, index) => (
                        <CarouselItem key={index}>
                            <div className='relative h-full w-full'>
                                <Image src={text.banner} alt={text.title} width={1920} height={1080} />
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.3,
                                    }}
                                    className='absolute left-1/3 top-1/2 w-3/4 -translate-x-1/3 -translate-y-1/2 transform *:text-white'
                                >
                                    <h1 className='w-full text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>
                                        {text.title}
                                    </h1>
                                    <p className='w-full text-base font-medium sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>
                                        {text.description}
                                    </p>
                                </motion.div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <Container className='py-4' mainClassName='mt-4 flex flex-col items-start justify-center gap-y-4'>
                <Section title='Hakkımızda'>
                    <p className='text-base font-normal'>
                        Fuarium, 2006 yılında Almanya’da kurulmuş olup, Almanya’da düzenlenen fuarlar için katılımcı
                        firmalara hizmet vermektedir. Fuarium, Almanya’da düzenlenen fuarlara katılmak isteyen Türk
                        firmalarına, fuar organizasyonu, stand tasarımı, stand inşaatı, stand ekipmanları, lojistik,
                        konaklama, transfer, tercümanlık, fuar sonrası hizmetler gibi birçok konuda hizmet vermektedir.
                    </p>
                </Section>
                <Section title='Yaklaşan Fuarlarımız'>
                    <div className='flex w-full flex-col items-center justify-center gap-4 md:flex-row md:gap-8 lg:gap-12'>
                        {fairTours.map((tour, index) => (
                            <FairToursCard key={index} tour={tour} />
                        ))}
                    </div>
                </Section>
                <div className='my-4 flex w-full flex-col items-center justify-center gap-4 md:flex-row md:gap-8 lg:gap-12'>
                    {mockFairSupportsHomepage.map((support, index) => (
                        <div
                            key={index}
                            className='flex w-full flex-col items-center justify-center gap-4 sm:w-2/3 md:w-1/2'
                        >
                            <Image
                                src={support.iconImage}
                                alt={support.title}
                                width={1920}
                                height={1080}
                                className='w-1/3 md:w-2/3 lg:w-3/4'
                            />
                            <h1 className='text-center text-3xl font-bold md:text-4xl'>{support.title}</h1>
                            <p className='text-center text-base font-normal md:text-lg lg:text-xl'>{support.content}</p>
                            <Link
                                href={support.href}
                                className={cn('w-3/4', buttonVariants({ variant: 'secondary', size: 'sm' }))}
                            >
                                Detaylı Bilgi
                            </Link>
                        </div>
                    ))}
                </div>
                <Section title='Vize İşlemlerinizi bize bırakın zamanınız size kalsın!'>
                    <p className='text-base font-normal'>
                        Yurtdışı fuar seyahatlerinizde kilit öneme sahip vize işlemlerinizi sizin için en hızlı ve en
                        güvenilir şekilde yürütüyoruz. Hata kabul etmeyen vize işlemleri sürecinde, büyük bir titizlikle
                        çalışan, alanında uzman ve profesyonel ekibimizle, vize işlemlerinizin her aşamasını özenle
                        takip edip, sizlere kaliteli hizmeti sunuyoruz. Ciddi bir ön hazırlık gerektiren vize
                        başvurularında Fuarium’un güvenilir ekibiyle çalışarak hem zamanınızdan hem de harcamalarınızdan
                        tasarruf edeceksiniz. Hiçbir bürokratik soruna takılmadan ve zaman kaybına uğramadan vize
                        almanız için tüm bilgi ve tecrübemizle sizlere hizmet veriyoruz.
                    </p>
                    <Link href='/visa-consultancy' className={cn('w-full', buttonVariants({ variant: 'secondary' }))}>
                        Detaylı Bilgi
                    </Link>
                </Section>
            </Container>
        </>
    )
}

function Section({ title, children, className, ...props }: React.ComponentProps<'section'>) {
    return (
        <section className={cn('container mx-auto w-full', className)} {...props}>
            <h1 className='mb-3 text-center text-3xl font-bold'>{title}</h1>
            <div className='flex w-full flex-col items-start justify-center gap-2 text-center'>{children}</div>
        </section>
    )
}
