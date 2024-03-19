import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'
import { FairSupport } from '@/mock/fair-supports'
import Image from 'next/image'

export function FairSupportsCard({ support }: Readonly<{ support: FairSupport }>) {
    return (
        <Link href={support.href} className='w-full' scroll>
            <Card key={support.id} className='w-full rounded-lg'>
                <CardHeader className='p-0'>
                    <Image
                        src={support.bannerImage}
                        alt={support.title}
                        width={1920}
                        height={1080}
                        className='rounded-t-md'
                    />
                </CardHeader>
                <CardContent className='p-4'>
                    <CardTitle className='text-xl font-medium'>{support.title}</CardTitle>
                    <p>{support.description}</p>
                </CardContent>
            </Card>
        </Link>
    )
}
