import React from 'react'
import { Container } from '@/components/Containers'

type Props = {
    params: {
        fair: string
    }
}

export default function Page({ params }: Props): React.ReactElement {
    return (
        <Container>
            <h1>
                Fuar turları category{'>'}fair sayfası - {params.fair}
            </h1>
        </Container>
    )
}
