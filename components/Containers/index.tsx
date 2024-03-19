'use client'
import React, { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'
import { As, ComponentPropsWithAs } from '@/lib/types'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { visaConsultancy } from '@/mock/visa-consultancy'
import Image from 'next/image'
import { Menu, menus } from '@/lib/menu'

interface ContainerProps {
    className?: string
    mainClassName?: string
    breadcrumbClassName?: string
    title?: string
    bannerImage?: string
    description?: string
}

function Container<Component extends As>({
    as,
    className,
    mainClassName,
    breadcrumbClassName,
    children,
    title,
    bannerImage,
    description,
    ...props
}: ComponentPropsWithAs<Component, PropsWithChildren<ContainerProps>>) {
    const Component = as ?? 'section'
    const pathname = usePathname()
    const _bannerImage = visaConsultancy.find((item) => item.href === pathname)?.bannerImage ?? ''
    return (
        <AnimatePresence mode='wait'>
            <Component key={pathname} className={cn('container relative mx-auto', className)} {...props}>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className='flex h-full w-full flex-col items-start justify-start gap-y-4 sm:items-center sm:justify-center sm:gap-y-8'
                >
                    {_bannerImage && (
                        <Image src={_bannerImage} alt={title ?? ''} width={800} height={200} className='' />
                    )}
                    {(title || description) && (
                        <div className='flex w-full flex-col items-start justify-start gap-y-2 sm:items-center sm:justify-center'>
                            {title && (
                                <h1
                                    className={cn(
                                        'w-full text-start text-5xl font-bold',
                                        _bannerImage
                                            ? 'absolute left-4 top-6 z-10 text-6xl  text-white'
                                            : 'px-4 pt-4 text-4xl sm:px-6 sm:pt-6 lg:px-8'
                                    )}
                                >
                                    {title}
                                </h1>
                            )}
                            {description && (
                                <p className='w-full px-4 text-start text-lg text-gray-600 sm:px-6 lg:px-8'>
                                    {description}
                                </p>
                            )}
                        </div>
                    )}
                    <main className={cn('h-full w-full px-4 pb-8 pt-1 sm:px-6 lg:px-8', mainClassName)}>
                        {pathname !== '/' && (
                            <Breadcrumb className={cn('mb-4', breadcrumbClassName)}>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href='/'>Anasayfa</BreadcrumbLink>
                                        <BreadcrumbSeparator />
                                    </BreadcrumbItem>
                                    {pathname
                                        .split('/')
                                        .filter(Boolean)
                                        .map((item: string, index: number, array: string[]): React.ReactElement => {
                                            let menuMatch: Menu | null = findMenuItemByUrl(
                                                menus,
                                                `/${array.slice(0, index + 1).join('/')}`
                                            )
                                            const title: string = menuMatch
                                                ? menuMatch.title
                                                : item.toLocaleUpperCase('tr-TR')
                                            return (
                                                <BreadcrumbItem key={item}>
                                                    {index < array.length - 1 ? (
                                                        <>
                                                            <BreadcrumbLink
                                                                href={`/${array.slice(0, index + 1).join('/')}`}
                                                            >
                                                                {title}
                                                            </BreadcrumbLink>
                                                            <BreadcrumbSeparator />
                                                        </>
                                                    ) : (
                                                        <BreadcrumbPage>{title}</BreadcrumbPage>
                                                    )}
                                                </BreadcrumbItem>
                                            )
                                        })}
                                </BreadcrumbList>
                            </Breadcrumb>
                        )}
                        {children}
                    </main>
                </motion.div>
            </Component>
        </AnimatePresence>
    )
}

const findMenuItemByUrl = (menus: Menu[], url: string): Menu | null => {
    for (const menu of menus) {
        if (menu.url === url) return menu
        if (menu.children) {
            const foundInChild = findMenuItemByUrl(menu.children, url)
            if (foundInChild) return foundInChild
        }
    }
    return null
}

export { Container }
export type { ContainerProps }
