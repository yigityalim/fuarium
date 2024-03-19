import React from 'react'
import '@/styles/globals.css'
import { Metadata } from 'next'
import { Providers } from '@/components/providers'
import { Analytics } from '@/components/analytics'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { cn } from '@/lib/utils'
import { fontSans } from '@/lib/fonts'
import { siteConfig } from '@/config/siteConfig'
import { SpeedInsights } from '@/components/speed-insights'

export default async function RootLayout({ children }: React.PropsWithChildren): Promise<React.ReactElement> {
    return (
        <html lang='tr' suppressHydrationWarning>
            <body className={cn('', fontSans.className)}>
                <Providers
                    attribute='class'
                    defaultTheme='light'
                    // FIXME- koyu mod logo sebebi ile bir süreliğine kapatıldı
                    //enableSystem
                    //enableColorScheme
                    //disableTransitionOnChange
                >
                    <Header />
                    {children}
                    <Footer />
                </Providers>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}

export const metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    metadataBase: new URL(siteConfig.url),
    description: siteConfig.description,
    keywords: [...siteConfig.keywords],
    authors: [
        {
            name: 'yigityalim',
            url: 'https://mehmetyigityalimcom',
        },
    ],
    creator: 'yigityalim',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: '@shadcn',
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
    manifest: `${siteConfig.url}/site.webmanifest`,
} as Metadata satisfies Metadata
