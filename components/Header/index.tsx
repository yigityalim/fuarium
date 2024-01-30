'use client'
import React from 'react'
import Image from 'next/image'
import { useMenu } from '@/store/menu'
import fuariumLogo from '../../public/fuarium-logo.png'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ToggleMenu } from '@/components/Header/ToggleMenu'
import { OverlayMenu } from '@/components/Header/OverlayMenu'
import { useScroll } from '@/hooks/use-scroll'

export default function Header(): React.ReactElement {
    const menu = useMenu((state) => state.menu)
    const isOpen = useMenu((state) => state.isOpen)
    const setMenu = useMenu((state) => state.set)
    const handleScroll = useScroll(80, 90)
    return (
        <>
            <header
                className={cn(
                    'container sticky top-0 z-[51] mx-auto flex h-[80px] w-full items-center justify-between bg-opacity-60 px-8 py-6 backdrop-blur-sm transition duration-300 md:p-10 lg:p-12 xl:p-16',
                    {
                        'translate-y-0': handleScroll,
                        'translate-y-[-80px]': !handleScroll,
                    }
                )}
            >
                <Link
                    href='/'
                    className='flex h-full w-full items-center justify-start'
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                        setMenu(false)
                    }}
                >
                    <Image src={fuariumLogo} alt='Fuarium Logo' loading='lazy' className='w-1/2' />
                </Link>
                <div className='flex md:hidden'>
                    <ToggleMenu />
                </div>
                <div className='hidden h-full w-full flex-row items-center justify-between gap-x-4 px-4 md:flex'>
                    {menu.map((item) => (
                        <Link key={item.id} href={item.url} className='text-lg font-bold text-white'>
                            {item.title}
                        </Link>
                    ))}
                </div>
            </header>
            <OverlayMenu />
        </>
    )
}
