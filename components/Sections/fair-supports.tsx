import React from 'react'
import { Container } from '@/components/Containers'
import { fairSupports as mockFairSupports } from '@/mock/fair-supports'
import { FairSupportsCard } from '@/components/Cards/fair-supports'

export function FairSupports(): React.ReactElement {
    return (
        <Container title='Fuar Destekleri'>
            <div className='flex flex-col items-center justify-center gap-4 pt-4'>
                {mockFairSupports.map((support) => (
                    <FairSupportsCard key={support.id} support={support} />
                ))}
            </div>
        </Container>
    )
}
