import React from 'react'
import { Container } from '@/components/Containers'
import { VizaImage } from '@/lib/viza'
export default async function Home(): Promise<React.ReactElement> {
    return (
        <Container>
            <h1>Home</h1>
            <VizaImage name='passport' className='w-full' />
            <VizaImage name='special' className='w-full' />
            <VizaImage name='service' className='w-full' />
            <VizaImage name='diplomatic' className='w-full' />
        </Container>
    )
}
