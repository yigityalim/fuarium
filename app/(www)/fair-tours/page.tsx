import React from 'react'
import { Container } from '@/components/Containers'
import { fairTours } from '@/mock/fair-tours'
import { FairToursCard } from '@/components/Cards/fair-tours'

export default function Page(): React.ReactElement {
    return (
        <Container title='Fuar Turları' description='Fuar turları anasayfa'>
            {fairTours.map((tour) => (
                <FairToursCard key={tour.id} tour={tour} />
            ))}
        </Container>
    )
}
