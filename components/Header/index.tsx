'use client'
import React from 'react'
import Image from 'next/image'
import { useMenu } from '@/store/menu'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ToggleMenu } from '@/components/Header/ToggleMenu'
import { OverlayMenu } from '@/components/Header/OverlayMenu'
import { useScroll } from '@/hooks/use-scroll'
import { useMediaQuery } from 'usehooks-ts'
import fuariumWhite from '@/public/fuarium-white.png'
import fuariumBlack from '@/public/fuarium-black.png'
import { usePathname } from 'next/navigation'
import { Locale } from '@/i18n.config'

export default function Header(): React.ReactElement {
    const menu = useMenu((state) => state.menu)
    const setMenu = useMenu((state) => state.set)
    const handleScroll = useScroll(80, 90)
    const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    const locale = usePathname().split('/')[1] as Locale

    return (
        <>
            <header
                className={cn(
                    'container sticky top-0 z-[51] mx-auto flex h-[80px] w-full items-center justify-between bg-white bg-opacity-60 px-8 py-6 saturate-200 backdrop-blur-xl transition duration-300 dark:bg-black dark:bg-opacity-70 dark:backdrop-blur-2xl md:p-10 lg:p-12 xl:p-16',
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
                    <Image src={fuariumWhite} alt='Fuarium Logo' loading='lazy' className='w-[150px]' />
                </Link>
                <div className='flex md:hidden'>
                    <ToggleMenu />
                </div>
                <div className='hidden h-full w-full flex-row items-center justify-between gap-x-4 px-4 md:flex'>
                    {menu.map((item) => (
                        <Link key={item.id} href={item.url} className='text-lg font-bold text-white'>
                            {item.title[locale]}
                        </Link>
                    ))}
                </div>
            </header>
            <OverlayMenu />
        </>
    )
}
