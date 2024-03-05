import * as React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'

const brand = [
    {
        name: 'Fuarium Group',
        url: 'https://fuarium.com',
    },
    {
        name: 'Fuarium Medya',
        url: 'https://fuariummedya.com',
    },
    {
        name: 'Fuarium Catering',
        url: 'https://fuariumcatering.com',
    },
    {
        name: 'Fuarium Stant',
        url: 'https://fuariumstant.com',
    },
]

export function BrandSwitcher(): React.ReactElement {
    return (
        <Select defaultValue='system' value={brand[0].name}>
            <SelectTrigger
                className={cn('w-full sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px]')}
                tabIndex={0}
                role='button'
            >
                <SelectValue placeholder='Tema Seçiniz:' />
            </SelectTrigger>
            <SelectContent>
                {brand.map((item, index) => (
                    <SelectItem key={index} value={item.name}>
                        <a href={item.url} className='h-full w-full' target='_blank' rel='noreferrer' title={item.name}>
                            {item.name}
                        </a>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
