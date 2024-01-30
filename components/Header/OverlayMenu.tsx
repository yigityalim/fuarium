'use client'
import { ReactElement, useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useMenu } from '@/store/menu'
import type { Menu } from '@/lib/types/menu'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface MenuItemProps {
    item: Menu
    url: string
    isGoingForward: boolean
    closeMenu: () => void
    handleMenuClick: (item: Menu) => void
}

// ...

const MenuItem: React.FC<MenuItemProps> = ({ item, url, isGoingForward, closeMenu, handleMenuClick }) => (
    <motion.div
        initial={{ opacity: 0, x: isGoingForward ? -30 : 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: isGoingForward ? 30 : -30 }}
        key={item.url}
        className='flex w-full items-center justify-between gap-x-4 text-4xl font-bold leading-9 tracking-wider'
    >
        <Link href={url} className='flex w-full flex-row items-center justify-center gap-x-2' onClick={closeMenu}>
            <div className='w-full whitespace-nowrap text-start text-2xl font-bold'>{item.title}</div>
        </Link>
        <div className='flex w-full items-center justify-end' onClick={() => handleMenuClick(item)}>
            {item.children && <ArrowRight className='' />}
        </div>
    </motion.div>
)

export function OverlayMenu(): ReactElement {
    const router = useRouter()
    const menu = useMenu((state) => state.menu)
    const [menuStack, setMenuStack] = useState<Menu[][]>([menu])
    const [isGoingForward, setIsGoingForward] = useState<boolean>(false)
    const isOpen = useMenu((state) => state.isOpen)
    const setMenu = useMenu((state) => state.set)

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        if (window.innerWidth > 768) document.body.style.paddingRight = isOpen ? '15px' : ''
    }, [isOpen])

    const handleMenuClick = useCallback(
        ({ children, url }: Menu) => {
            if (children && children.length > 0) {
                setIsGoingForward(true)
                setMenuStack([...menuStack, children])
            } else {
                router.push(url, { scroll: false })
                setMenu(false)
            }
        },
        [setMenu, menuStack, router]
    )

    const closeMenu = useCallback(() => {
        setMenu(false)
        setIsGoingForward(false) // Menüyü kapattığımızda eski haline dönmesi için
    }, [setMenu])

    const goBack = useCallback(() => {
        if (menuStack.length > 1) {
            setMenuStack((prevState) => prevState.slice(0, -1))
            setIsGoingForward(false)
        }
    }, [menuStack.length])

    const currentMenu = useMemo(() => menuStack[menuStack.length - 1], [menuStack])

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    className={cn(
                        'container fixed bottom-0 left-0 right-0 top-[80px] z-[52] mx-auto flex flex-col items-center justify-between gap-y-4 p-8 transition-all duration-300 md:hidden',
                        isOpen ? 'bg-opacity-60 backdrop-blur-sm' : 'bg-opacity-70 backdrop-blur-md'
                    )}
                >
                    <div className='flex w-full flex-col items-center justify-center gap-y-8'>
                        {currentMenu.map((item, index) => (
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
