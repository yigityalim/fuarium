import { Container } from '@/components/Containers'
import React from 'react'
import { fairSupports } from '@/lib/menu'
import { fairSupports as mockFairSupports } from '@/mock/fair-supports'
import { notFound } from 'next/navigation'
import Image from 'next/image'

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
    const category = mockFairSupports.find((item) => item.href.includes(params.category)) ?? notFound()
    return (
        <Container title={category.title}>
            <Image
                src={category.bannerImage}
                alt={category.title}
                width={1920}
                height={1080}
                className='w-full rounded'
            />
            <div className='mt-8 flex w-full flex-col items-center justify-center'>
                {category.body.map((item) => (
                    <div key={item.title} className='flex w-full flex-col items-center justify-center'>
                        <h2 className='w-full text-start text-2xl font-bold'>{item.title}</h2>
                        {item.content.map((content) => (
                            <p key={content} className='my-4 text-lg leading-5'>
                                {content}
                            </p>
                        ))}
                    </div>
                ))}
            </div>
        </Container>
    )
}
