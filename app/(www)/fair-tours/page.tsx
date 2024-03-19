import React from 'react'
import { Container } from '@/components/Containers'
import { fairTours } from '@/mock/fair-tours'
import { FairToursCard } from '@/components/Cards/fair-tours'

export default function Page(): React.ReactElement {
    return (
        <Container title='Fuar Turları'>
            <div className='flex w-full flex-col items-center justify-center gap-4'>
                {fairTours.map((tour) => (
                    <FairToursCard key={tour.id} tour={tour} />
                ))}
            </div>
        </Container>
    )
}
