import { fairSupports } from '@/lib/menu'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: fairSupports.url,
            lastModified: fairSupports.lastModified,
            changeFrequency: fairSupports.changeFrequency,
            priority: fairSupports.priority,
        },
        ...fairSupports.children!.map((child) => ({
            url: child.url,
            lastModified: child.lastModified,
            changeFrequency: child.changeFrequency,
            priority: child.priority,
        })),
    ]
}
