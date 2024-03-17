import { MetadataRoute } from 'next'
import { IconProps } from '@/lib/icons'

interface Menu {
    id: string
    url: string
    title: string
    description?: string
    lastModified: MetadataRoute.Sitemap[number]['lastModified']
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
    priority: MetadataRoute.Sitemap[number]['priority']
    icons?: IconProps
    children?: Menu[]
}

export type { Menu }