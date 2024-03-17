import React from 'react'
import { Container } from '@/components/Containers'
import { fairTours as fairToursPrimitive } from '@/lib/menu'
import { fairTours as mockFairTours } from '@/mock/fair-tours'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { format } from 'date-fns'
import { tr } from 'date-fns/locale'
import { FairToursCard } from '@/components/Cards/fair-tours'

type Props = {
    params: {
        category: string
    }
}

export async function generateStaticParams(): Promise<{ params: { category: string } }[]> {
    return fairToursPrimitive.children!.map(({ url }) => ({
        params: {
            category: url,
        },
    }))
}

export default function Page({ params }: Props): React.ReactElement {
    return (
        <Container title={fairToursPrimitive.children!.find((tour) => tour.url.includes(params.category))?.title}>
            {mockFairTours
                .filter((tour) => tour.category === params.category)
                .map((tour) => (
                    <FairToursCard key={tour.id} tour={tour} />
                ))}
        </Container>
    )
}
