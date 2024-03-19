'use client'

import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Container } from '@/components/Containers'
import { fairSupports as mockFairSupports } from '@/mock/fair-supports'
import { FairSupportsCard } from '@/components/Cards/fair-supports'
import { useRouter } from 'next/navigation'

const fairSupports = ['Devlet Destekleri', 'Fabrika - Tesis Ziyaretleri', 'Dernek Ziyaretleri', 'B2B - B2C Görüşmeleri']

export function FairSupports(): React.ReactElement {
    const [selected, setSelected] = React.useState<string>('Seçiniz')
    const router = useRouter()

    const onValueChange = (value: string) => {
        setSelected(value)
        const support = mockFairSupports.find((support) => support.id === value)
        if (support) router.push(support.href, { scroll: false })
    }

    return (
        <Container title='Fuar Destekleri'>
            <div className='flex w-full flex-col items-center justify-center gap-2'>
                <Select onValueChange={onValueChange}>
                    <SelectTrigger value={selected}>
                        <SelectValue placeholder={selected} />
                    </SelectTrigger>
                    <SelectContent className='w-full'>
                        {fairSupports.map((support) => (
                            <SelectItem key={support} value={support}>
                                {support}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className='flex flex-col items-center justify-center gap-2 pt-4'>
                {mockFairSupports.map((support) => (
                    <FairSupportsCard key={support.id} support={support} />
                ))}
            </div>
        </Container>
    )
}
