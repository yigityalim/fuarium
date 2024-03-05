import { Container } from '@/components/Containers'
import React from 'react'

interface PageProps {
    params: {
        country: string
    }
}

export default function Page({ params }: PageProps): React.ReactElement {
    return (
        <Container>
            <h1>Page</h1>
            <p>Params: {JSON.stringify(params)}</p>
        </Container>
    )
}
