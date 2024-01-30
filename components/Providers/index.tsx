'use client'
import React from 'react'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export default function Providers({ children, ...props }: Readonly<ThemeProviderProps>): React.JSX.Element {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
