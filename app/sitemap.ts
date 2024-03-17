import { MetadataRoute } from 'next'
import { menus } from '@/lib/menu'
import { siteConfig } from '@/config/siteConfig'

export default function sitemap(): MetadataRoute.Sitemap {
    return menus.map(({ url, lastModified, changeFrequency, priority }) => ({
        url: `${siteConfig.url}${url}`,
        lastModified,
        changeFrequency,
        priority,
    }))
}
