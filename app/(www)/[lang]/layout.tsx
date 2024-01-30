import React from 'react'
import Providers from '@/components/Providers'
import { GeistSans } from 'geist/font/sans'
import { Analytics } from '@vercel/analytics/react'
import '../../globals.css'
import i18n, { type Locale } from '@/i18n.config'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

type RootLayoutProps = Readonly<{ children: React.ReactNode; params: { lang: Locale } }>

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({ children, params }: RootLayoutProps): React.ReactElement<RootLayoutProps> {
    return (
        <html lang={params.lang} suppressHydrationWarning>
            <body className={GeistSans.className}>
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
