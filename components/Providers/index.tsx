'use client'
import React from 'react'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

interface ProvidersProps extends ThemeProviderProps {}

export function Providers({ children, ...props }: Readonly<ProvidersProps>): React.JSX.Element {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
