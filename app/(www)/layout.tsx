import React from 'react'
import { Providers } from '@/components/Providers'
import { GeistSans } from 'geist/font/sans'
import { Analytics } from '@vercel/analytics/react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/styles/globals.css'
import { cn } from '@/lib/utils'

type RootLayoutProps = Readonly<{ children: React.ReactNode }>

export default function RootLayout({ children }: RootLayoutProps): React.ReactElement<RootLayoutProps> {
    return (
        <html lang='tr' suppressHydrationWarning>
            <body
                className={cn(
                    'bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white',
                    'min-h-screen',
                    'flex flex-col items-center justify-start',
                    'font-sans'
                )}
            >
                <Providers
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                    enableColorScheme
                    disableTransitionOnChange
                >
                    <Header />
                    {children}
                    <Footer />
                </Providers>
                <Analytics />
            </body>
        </html>
    )
}
