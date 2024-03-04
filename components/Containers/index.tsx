'use client'
import React, { PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'
import { As, ComponentPropsWithAs } from '@/lib/types'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import '@/styles/breadcrumbs.css'
import Link from 'next/link'
import { useMenu } from '@/store/menu'
import { Icon } from '@/lib/icons'

interface ContainerProps {
    className?: string
}

function Container<Component extends As>({
    as,
    className,
    children,
    ...props
}: ComponentPropsWithAs<Component, PropsWithChildren<ContainerProps>>) {
    const Component = as ?? 'section'
    const pathname = usePathname()
    const menu = useMenu((state) => state.menu)
    const breadcrumbs = pathname.split('/').slice(1)

    return (
        <AnimatePresence mode='wait'>
            <Component
                key={pathname}
                className={cn('container mx-auto px-4 py-8 sm:px-6 lg:px-8', className)}
                {...props}
            >
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className='flex h-full w-full flex-col items-start justify-start gap-y-4 sm:items-center sm:justify-center sm:gap-y-8'
                >
                    <motion.nav
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className='inline-flex items-center space-x-1 md:space-x-2'
                    >
                        {breadcrumbs &&
                            breadcrumbs.map((breadcrumb, index) => (
                                <React.Fragment key={breadcrumb}>
                                    <Link
                                        href={`/${breadcrumbs.slice(0, index + 1).join('/')}`}
                                        className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
                                    >
                                        {breadcrumb}
                                    </Link>
                                    {index < breadcrumbs.length - 1 && (
                                        <motion.span
                                            key={breadcrumb + index}
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 10 }}
                                            className='text-sm font-bold text-gray-500'
                                        >
                                            <Icon name='chevron-right' className='size-4' />
                                        </motion.span>
                                    )}
                                </React.Fragment>
                            ))}
                    </motion.nav>
                    {children}
                </motion.div>
            </Component>
        </AnimatePresence>
    )
}

export { Container }
export type { ContainerProps }
