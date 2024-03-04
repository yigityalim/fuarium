import { Container } from '@/components/Containers'
import React from 'react'

type Props = {
    params: {
        category: string
    }
}

export default function Page({ params }: Props): React.ReactElement {
    return (
        <Container>
            <h1>Fuar Destekleri alt sayfa - {params.category}</h1>
        </Container>
    )
}
