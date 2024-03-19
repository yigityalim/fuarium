'use client'
import React, { Suspense } from 'react'
import { useMenu } from '@/store/menu'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ToggleMenu } from '@/components/Header/ToggleMenu'
import { OverlayMenu } from '@/components/Header/OverlayMenu'
import { useScrollToThreshold } from '@/hooks/use-scroll'
import { BrandIcon } from '@/lib/icons'
import { Spinner } from '@/components/Spinner'
import { useMediaQuery } from 'usehooks-ts'
import { usePathname } from 'next/navigation'

export function Header(): React.ReactElement {
    const menu = useMenu((state) => state.menu)
    const setMenu = useMenu((state) => state.set)
    const isLaptop = useMediaQuery('(min-width: 768px)')
    const handleScroll = useScrollToThreshold(isLaptop ? 160 : undefined)
    const pathname = usePathname()

    const headerClassName: string = cn(
        'left-0 right-0 top-0 z-[53] flex w-full items-center justify-between p-4 transition duration-300 md:p-6',
        {
            'bg-white bg-opacity-60 saturate-200 backdrop-blur-xl dark:bg-black dark:bg-opacity-70 dark:backdrop-blur-2xl ':
                !isLaptop && handleScroll,
            'bg-transparent': !handleScroll || isLaptop,
        },
        isLaptop &&
            handleScroll &&
            'bg-white bg-opacity-60 saturate-200 backdrop-blur-xl dark:bg-black dark:bg-opacity-70 dark:backdrop-blur-2xl',
        pathname === '/' ? 'fixed' : 'sticky'
    )

    return (
        <>
            <header className={headerClassName}>
                <Suspense fallback={<Spinner className='h-12 w-12' />}>
                    <BrandIcon
                        asLink
                        href='/'
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                            setMenu(false)
                        }}
                        className='flex h-[60px] w-[200px] cursor-pointer items-center justify-center'
                    />
                </Suspense>
                <div className='flex md:hidden'>
                    <ToggleMenu />
                </div>
                <div className='hidden h-full flex-row items-center justify-between gap-x-4 px-4 md:flex'>
                    {menu.map((item) => (
                        <Link key={item.id} href={item.url} className='text-lg font-bold text-black'>
                            {item.title}
                        </Link>
                    ))}
                </div>
            </header>
            <OverlayMenu />
        </>
    )
}
