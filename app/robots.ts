import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api', '/vercel.svg', '/sitemap.xml'],
        },
        sitemap: `https://fuarium.vercel.app/sitemap.xml`,
        host: `https://fuarium.vercel.app`,
    }
}
