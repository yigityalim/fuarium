import { Container } from '@/components/Containers'
import React from 'react'
import { visaConsultancy } from '@/mock/visa-consultancy'
import { notFound } from 'next/navigation'
import { Balancer } from '@/components/Typography/balancer'
import { VisaImage, type VisaImageProps } from '@/lib/visa'

interface PageProps {
    params: {
        country: string
    }
}

export default function Page({ params }: PageProps): React.ReactElement {
    const country = visaConsultancy.find((c) => c.id === params.country) ?? notFound()
    return (
        <Container>
            <div className='flex h-full w-full flex-col items-center justify-center gap-6'>
                <h1 className='w-full text-start text-5xl font-bold'>{country.country}</h1>
                <h2 className='w-full text-start text-2xl font-bold'>{country.title}</h2>
                <Balancer>{country.description}</Balancer>
                <ul className='flex w-full list-none flex-col items-start justify-start gap-4 text-start'>
                    {country.data.list.map((item, index) => (
                        <li key={index} className='w-full'>
                            <h3 className='my-2 rounded bg-gray-200 px-2 py-1 text-xl font-bold dark:bg-zinc-900'>
                                {item.title}
                            </h3>
                            <Balancer>{item.description}</Balancer>
                        </li>
                    ))}
                </ul>
                <h2 className='w-full text-start text-2xl font-bold'>Vize Durumu</h2>
                <div className='grid w-full grid-cols-2 gap-6'>
                    {Object.entries(country.passport).map(([key, value], index) => (
                        <div key={index} className='flex flex-col items-center justify-center gap-2'>
                            <VisaImage name={key as VisaImageProps['name']} />
                            <Balancer>{value}</Balancer>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    )
}
