import React from 'react'
import Link from 'next/link'
import { BrandIcon } from '@/lib/icons'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { Balancer } from '@/components/Typography/balancer'
import { siteConfig } from '@/config/siteConfig'
import { BrandSwitcher } from '@/components/BrandSwitcher'
import { Menu } from '@/components/Footer/menu'
import { ContactForm } from '@/components/Footer/form'

export function Footer(): React.ReactElement {
    return (
        <footer className='container mx-auto flex flex-col items-center justify-start gap-y-4 px-4 py-8 sm:px-6 md:flex-row md:items-start md:justify-between md:gap-x-4 md:gap-y-0 lg:px-8'>
            <div className='flex w-full flex-col items-start justify-center gap-y-4'>
                <Link href='/' className='flex h-[60px] w-full cursor-pointer items-center justify-start'>
                    <BrandIcon />
                </Link>
                <ThemeSwitcher className='w-full' />
                <BrandSwitcher className='w-full' />
                <Balancer>{siteConfig.description}</Balancer>
            </div>
            <div className='flex w-full flex-col items-center justify-center gap-y-2'>
                <h1 className='my-6 w-full text-start text-2xl font-bold'>Site Haritası</h1>
                <Menu />
            </div>
            <div className='flex w-full flex-col items-center justify-center gap-y-4'>
                <h1 className='my-6 w-full text-start text-2xl font-bold'>İletişim</h1>
                <p className='w-full text-start text-lg font-medium'>{siteConfig.fullName}</p>
                <p className='w-full text-start text-lg font-medium'>
                    <a href={`mailto:${siteConfig.email}`} className='hover:underline'>
                        {siteConfig.email}
                    </a>
                </p>
                <p className='w-full text-start text-lg font-medium'>
                    <a href={`tel:${siteConfig.tel}`} className='hover:underline'>
                        {siteConfig.tel}
                    </a>
                </p>
                <p className='w-full text-start text-lg font-medium'>{siteConfig.address}</p>
            </div>
            <div className='flex w-full flex-col items-center justify-center gap-y-2'>
                <h1 className='my-6 w-full text-start text-2xl font-bold'>Müşteri Formu</h1>
                <ContactForm />
            </div>
        </footer>
    )
}
