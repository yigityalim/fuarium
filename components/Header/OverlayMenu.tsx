'use client'

import React from 'react'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { BrandSwitcher } from '@/components/BrandSwitcher'
import type { Menu } from '@/lib/types/menu'
import { cn } from '@/lib/utils'
import { useMenu } from '@/store/menu'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Balancer from 'react-wrap-balancer'

interface MenuItemProps {
    item: Menu
    url: string
    isGoingForward: boolean
    closeMenu: () => void
    handleMenuClick: (item: Menu) => void
}

const MenuItem: React.FC<MenuItemProps> = ({ item, url, isGoingForward, closeMenu, handleMenuClick }) => (
    <motion.div
        initial={{ opacity: 0, x: isGoingForward ? -30 : 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: isGoingForward ? 30 : -30 }}
        key={item.url}
        className='z-10 flex w-full items-center justify-between gap-x-4 text-4xl font-bold leading-9 tracking-wider'
    >
        <Link href={url} className='flex w-full flex-row items-center justify-center gap-x-2' onClick={closeMenu}>
            <div className='w-full whitespace-nowrap text-start text-2xl font-bold'>
                <Balancer>{item.title}</Balancer>
            </div>
        </Link>
        {item.children && (
            <div className='flex w-full items-center justify-end' onClick={() => handleMenuClick(item)}>
                {item.children && <ArrowRight className='' />}
            </div>
        )}
    </motion.div>
)

export function OverlayMenu(): React.ReactElement {
    const router = useRouter()
    const menu = useMenu((state) => state.menu)
    const [menuStack, setMenuStack] = React.useState<Menu[][]>([menu])
    const [isGoingForward, setIsGoingForward] = React.useState<boolean>(false)
    const isOpen = useMenu((state) => state.isOpen)
    const setMenu = useMenu((state) => state.set)

    React.useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        if (window.innerWidth > 768) document.body.style.paddingRight = isOpen ? '15px' : ''
    }, [isOpen])

    const handleMenuClick = React.useCallback(
        ({ children, url }: Menu) => {
            if (children && children.length > 0) {
                setIsGoingForward(true)
                setMenuStack([...menuStack, children])
            } else {
                router.push(url, { scroll: false })
                setMenu(false)
            }
        },
        [setMenu, menuStack, router, setIsGoingForward]
    )

    const closeMenu = React.useCallback(() => {
        setMenu(false)
        setIsGoingForward(false)
    }, [setMenu, setIsGoingForward])

    const goBack = React.useCallback(() => {
        if (menuStack.length > 1) {
            setMenuStack((prevState) => prevState.slice(0, -1))
            setIsGoingForward(false)
        }
    }, [menuStack.length, setMenuStack, setIsGoingForward])

    const currentMenu = React.useMemo(() => menuStack[menuStack.length - 1], [menuStack])

    return (
        <AnimatePresence initial={false} mode='wait'>
            {isOpen && (
                <div
                    className={cn(
                        'container fixed inset-0 z-[52] mx-auto flex flex-col items-center justify-between gap-y-4 p-8 pt-4 transition-all duration-300 md:hidden',
                        isOpen &&
                            'bg-white bg-opacity-70 saturate-200 backdrop-blur-lg dark:bg-black dark:bg-opacity-80 dark:backdrop-blur-lg'
                    )}
                >
                    <div className='flex w-full flex-col items-center justify-center gap-y-8 pt-[92px]'>
                        <motion.div
                            className='flex w-full flex-col items-center justify-start gap-4'
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                        >
                            <BrandSwitcher />
                            <ThemeSwitcher />
                        </motion.div>
                        {currentMenu.map((item) => (
                            <MenuItem
                                key={item.url}
                                item={item}
                                url={item.url}
                                closeMenu={closeMenu}
                                isGoingForward={isGoingForward}
                                handleMenuClick={handleMenuClick}
                            />
                        ))}
                    </div>
                    {menuStack.length > 1 && (
                        <div
                            onClick={goBack}
                            className='flex w-full cursor-pointer flex-row items-center justify-start gap-x-4 rounded p-2'
                        >
                            <ArrowLeft /> Geri dön
                        </div>
                    )}
                </div>
            )}
        </AnimatePresence>
    )
}
