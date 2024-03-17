import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/siteConfig'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api', '/vercel.svg', '/sitemap.xml'],
        },
        sitemap: `${siteConfig.url}/sitemap.xml`,
        host: `${siteConfig.url}`,
    }
}
