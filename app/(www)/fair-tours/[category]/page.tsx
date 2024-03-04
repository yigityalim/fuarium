import React from 'react'
import { Container } from '@/components/Containers'

type Props = {
    params: {
        category: string
    }
}

export default function Page({ params }: Props): React.ReactElement {
    return (
        <Container>
            <h1>Fuar turları alt sayfa - {params.category}</h1>
        </Container>
    )
}
