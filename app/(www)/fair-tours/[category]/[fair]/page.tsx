import React from 'react'
import { Container } from '@/components/Containers'
import { fairTours as fairToursMenu } from '@/lib/menu'
import { fairTours as fairToursMock } from '@/mock/fair-tours'
import { notFound } from 'next/navigation'
import { formatDate } from '@/lib/utils'

type Props = {
    params: {
        fair: string
    }
}

export async function generateStaticParams(): Promise<{ params: { fair: string } }[][]> {
    return fairToursMenu.children!.map(({ url, children }) =>
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
        <Container title={fair.name}>
            <h1 className='text-xl font-medium'>{fair.as}</h1>
            <p>{`${formatDate(new Date(fair.date.start))} - ${formatDate(new Date(fair.date.end))}`}</p>
        </Container>
    )
}
