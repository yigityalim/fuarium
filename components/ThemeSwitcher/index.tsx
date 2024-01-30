'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { usePathname } from 'next/navigation'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'

export default function ThemeSwitcher(): React.ReactElement {
    const { theme, setTheme, themes } = useTheme()
    const pathname = usePathname()
    const locale = pathname.split('/')[1]
    const messages: Record<string, Record<string, string>> = {
        tr: {
            light: 'Açık',
            dark: 'Koyu',
            system: 'Sistem',
        },
        de: {
            light: 'Hell',
            dark: 'Dunkel',
            system: 'System',
        },
        en: {
            light: 'Light',
            dark: 'Dark',
            system: 'System',
        },
    }

    const message = (theme: string): string => {
        if (!locale) return messages.en[theme]
        return messages[locale][theme]
    }

    return (
        <Select defaultValue='system' value={theme} onValueChange={(theme) => setTheme(theme)}>
            <SelectTrigger
                className={cn('w-full sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px]')}
                tabIndex={0}
                role='button'
            >
                <SelectValue placeholder='Tema Seçiniz:' />
            </SelectTrigger>
            <SelectContent>
                {themes.map((theme, index) => (
                    <SelectItem value={theme} key={locale + theme} tabIndex={index + 1} className='capitalize'>
                        {message(theme)}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}
