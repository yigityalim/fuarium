import { MetadataRoute } from 'next'
import { menus } from '@/lib/menu'
import { env } from '@/env'

export default function sitemap(): MetadataRoute.Sitemap {
    return menus.map(({ url, lastModified, changeFrequency, priority }) => ({
        url: `${env.VERCEL_URL}${url}`,
        lastModified,
        changeFrequency,
        priority,
    }))
}
