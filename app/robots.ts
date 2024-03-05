import { MetadataRoute } from 'next'
import { env } from '@/env'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api', '/vercel.svg', '/sitemap.xml'],
        },
        sitemap: `${env.VERCEL_URL}/sitemap.xml`,
        host: env.VERCEL_URL,
    }
}
