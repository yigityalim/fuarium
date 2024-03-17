import { MetadataRoute } from 'next'
import { fairTours } from '@/lib/menu'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: fairTours.url,
            lastModified: fairTours.lastModified,
            changeFrequency: fairTours.changeFrequency,
            priority: fairTours.priority,
        },
        ...fairTours.children!.map(({ url, lastModified, changeFrequency, priority }) => ({
            url,
            lastModified,
            changeFrequency,
            priority,
        })),
    ]
}
