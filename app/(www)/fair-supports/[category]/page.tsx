import { Container } from '@/components/Containers'
import React from 'react'
import { fairSupports } from '@/lib/menu'

type Props = {
    params: {
        category: string
    }
}

export async function generateStaticParams(): Promise<{ params: { category: string } }[]> {
    return fairSupports.children!.map(({ url }) => ({
        params: {
            category: url,
        },
    }))
}

export default function Page({ params }: Props): React.ReactElement {
    return (
        <Container>
            <h1>Fuar Destekleri alt sayfa - {params.category}</h1>
        </Container>
    )
}
