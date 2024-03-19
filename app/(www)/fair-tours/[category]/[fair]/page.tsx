import React from 'react'
import { Container } from '@/components/Containers'
import { fairTours as fairToursMenu } from '@/lib/menu'
import { fairTours as fairToursMock } from '@/mock/fair-tours'
import { notFound } from 'next/navigation'
import { cn, formatDate } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

type Props = {
    params: {
        fair: string
    }
}

export async function generateStaticParams(): Promise<{ params: { fair: string } }[][]> {
    return fairToursMenu.children!.map(({ children }) =>
        children!.map(({ url }) => ({
            params: {
                fair: url,
            },
        }))
    )
}

export default function Page({ params }: Props): React.ReactElement {
    const fair = fairToursMock.find((tour) => tour.href.includes(params.fair)) ?? notFound()
    return (
        <Container title={fair.name} description={fair.as}>
            <Image src={fair.hero} alt={fair.name} width={1920} height={1080} className='w-full' />
            <div className='mt-4 grid w-full grid-cols-2 grid-rows-2 gap-4'>
                <Badge title='Başlangıç Tarihi'>{formatDate(fair.date.start)}</Badge>
                <Badge title='Bitiş Tarihi'>{formatDate(fair.date.end)}</Badge>
                <Badge title='Şehir'>{fair.city}</Badge>
                <Badge title='Ülke'>{fair.country}</Badge>
            </div>
            <Link href={fair.href} className={cn('my-4 w-full', buttonVariants({ variant: 'secondary', size: 'sm' }))}>
                Hemen Rezerve Et
            </Link>
            <div>Burası eklencek. Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
        </Container>
    )
}

function Badge({ title, children }: React.PropsWithChildren<{ title: string }>): React.ReactElement {
    return (
        <div className='flex w-full flex-col items-center gap-2'>
            <h2 className='w-full border-b border-gray-300 text-center text-base font-bold'>{title}</h2>
            <p className='w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-sm font-light text-gray-500'>
                {children}
            </p>
        </div>
    )
}
