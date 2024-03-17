import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { format } from 'date-fns'
import { tr } from 'date-fns/locale'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import React from 'react'
import { FairTour } from '@/mock/fair-tours'

export function FairToursCard({ tour }: Readonly<{ tour: FairTour }>) {
    // TODO - Link komponentindeki href prop olarak eklenecek çünkü şu anda statik. bazı kullanımda değişebilir
    return (
        <Card key={tour.id} className='w-full'>
            <CardHeader>{tour.logo}</CardHeader>
            <CardContent>
                <CardTitle className='text-3xl font-bold'>{tour.name}</CardTitle>
                <div className='flex w-full flex-col items-start justify-center'>
                    <p className='text-lg font-bold'>{tour.as}</p>
                    <p className='text-zinc-500 dark:text-zinc-400'>
                        {format(new Date(tour.date.start), 'dd MMMM yyyy', { locale: tr }) +
                            ' - ' +
                            format(new Date(tour.date.end), 'dd MMMM yyyy', { locale: tr })}
                    </p>
                </div>
            </CardContent>
            <CardFooter>
                <Link
                    href={`/fair-tours/${tour.href}`}
                    className={cn('w-full', buttonVariants({ variant: 'secondary' }))}
                >
                    Detaylar
                </Link>
            </CardFooter>
        </Card>
    )
}
