'use client'
import React from 'react'
import { useMenu } from '@/store/menu'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ToggleMenu } from '@/components/Header/ToggleMenu'
import { OverlayMenu } from '@/components/Header/OverlayMenu'
import { useScroll } from '@/hooks/use-scroll'
import { BrandIcon } from '@/lib/icons'
import { useTheme } from 'next-themes'

export default function Header(): React.ReactElement {
    const menu = useMenu((state) => state.menu)
    const setMenu = useMenu((state) => state.set)
    const handleScroll = useScroll(80, 150)
    const { resolvedTheme } = useTheme()

    return (
        <>
            <header
                className={cn(
                    'container sticky top-0 z-[53] mx-auto flex w-full items-center justify-between bg-white bg-opacity-60 px-6 py-4 saturate-200 backdrop-blur-xl transition duration-300 dark:bg-black dark:bg-opacity-70 dark:backdrop-blur-2xl md:p-10 lg:p-12 xl:p-16',
                    {
                        'translate-y-0': handleScroll,
                        'translate-y-[-92px]': !handleScroll,
                    }
                )}
            >
                <Link
                    href='/'
                    className='flex h-[60px] w-[200px] cursor-pointer items-center justify-center'
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                        setMenu(false)
                    }}
                >
                    <BrandIcon theme={resolvedTheme} />
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
