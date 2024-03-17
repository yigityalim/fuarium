import { MetadataRoute } from 'next'
import { visaConsultancy } from '@/lib/menu'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return [
        {
            url: visaConsultancy.url,
            lastModified: visaConsultancy.lastModified,
            changeFrequency: visaConsultancy.changeFrequency,
            priority: visaConsultancy.priority,
        },
        ...visaConsultancy.children!.map(({ url, lastModified, changeFrequency, priority }) => ({
            url,
            lastModified,
            changeFrequency,
            priority,
        })),
    ]
}
