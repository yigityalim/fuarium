import { MetadataRoute } from 'next'
import { menus } from '@/lib/menu'

export default function sitemap(): MetadataRoute.Sitemap {
    return menus.map(({ url, lastModified, changeFrequency, priority }) => ({
        url: `https://fuarium.vercel.app${url}`,
        lastModified,
        changeFrequency,
        priority,
    }))
}
