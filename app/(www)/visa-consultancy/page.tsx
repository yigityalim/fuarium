import React from 'react'
import { Container } from '@/components/Containers'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { visaConsultancy } from '@/mock/visa-consultancy'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Page(): React.ReactElement {
    return (
        <Container>
            <h1 className='w-full text-start text-4xl font-bold italic'>Vize Danışmanlığı</h1>
            <div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {visaConsultancy.map((item) => (
                    <Link href={item.href} key={item.id} className='h-full w-full'>
                        <Card className='h-full w-full'>
                            <CardHeader>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={400}
                                    height={200}
                                    className='rounded-lg'
                                />
                            </CardHeader>
                            <CardContent>
                                <CardTitle className='my-3 text-2xl font-bold'>{item.title}</CardTitle>
                                <CardDescription>{item.description}</CardDescription>
                            </CardContent>
                            <CardFooter>
                                <Button size='sm' className='w-full' variant='secondary'>
                                    Detaylar
                                </Button>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </Container>
    )
}
