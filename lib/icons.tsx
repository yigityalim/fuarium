'use client'
import { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import { UseThemeProps } from 'next-themes/dist/types'
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useIsDarkMode } from '@/lib/use-is-dark-mode'
import Image from 'next/image'
import { list } from '@vercel/blob'

interface IconProps extends LucideProps {
    name: keyof typeof dynamicIconImports
}

const Icon = ({ name, ...props }: IconProps) => {
    const LucideIcon = dynamic(dynamicIconImports[name])
    return <LucideIcon {...props} />
}

type BrandIconProps = React.HTMLAttributes<SVGElement> & {
    theme: UseThemeProps['resolvedTheme']
}

export const BrandIcon = ({ className, asLink, ...props }: React.ComponentProps<typeof Link> & {
    asLink?: boolean
}): React.ReactElement => {
    const Component = asLink ? Link : React.Fragment
    const isDarkMode = false
    return (
        <Component {...props}>
            <Image src={isDarkMode ? '/FuariumGroup_LogoBeyaz.png' : '/FuariumGroup_LogoSiyah.png'}
                   alt="Logo" width={200} height={60} />
        </Component>
    )
}

export { Icon }
export type { IconProps }