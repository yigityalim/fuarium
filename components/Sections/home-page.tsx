'use client'
import React from 'react'
import { Container } from '@/components/Containers'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { fairTours } from '@/mock/fair-tours'
import { FairToursCard } from '@/components/Cards/fair-tours'

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
        <main className='container mx-auto w-full'>
            <Carousel
                className='w-full p-0'
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
                                    <h1 className='w-full text-2xl font-bold'>{text.title}</h1>
                                    <p className='w-full text-base font-medium'>{text.description}</p>
                                </motion.div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <Container className='mt-4'>
                <h1 className='mb-3 text-2xl font-bold'>Bazı Fuar Turlarımı:</h1>
                <div className='flex w-full flex-col items-start justify-center gap-2'>
                    {fairTours.slice(0, 3).map((tour, index) => (
                        <FairToursCard key={index} tour={tour} />
                    ))}
                </div>
            </Container>
        </main>
    )
}
