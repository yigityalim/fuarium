'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectPrimitiveProps,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

interface ThemeSwitcherProps extends SelectPrimitiveProps {
    className?: string
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps): React.ReactElement {
    const { theme, setTheme, themes } = useTheme()

    return (
        <Select defaultValue='system' value={theme} onValueChange={(theme) => setTheme(theme)}>
            <SelectTrigger
                className={cn('w-full sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px]', className)}
                tabIndex={0}
                role='button'
            >
                <SelectValue placeholder='Tema Seçiniz:' />
            </SelectTrigger>
            <SelectContent>
                {themes.map((theme, index) => (
                    <SelectItem value={theme} key={index} className='font-semibold'>
                        {theme === 'system' ? 'Sistem' : theme === 'dark' ? 'Koyu' : 'Açık'}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
