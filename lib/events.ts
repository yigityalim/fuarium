import va from '@vercel/analytics'
import { z } from 'zod'

const eventSchema = z.object({
    name: z.enum([
        'click',
        'view',
        'submit',
        'search',
        'navigate',
        'error',
        'success',
        'cancel',
        'purchase',
        'signup',
        'login',
        'logout',
        'share',
        'like',
    ]),
    properties: z
        .record(z.union([z.string(), z.number(), z.boolean(), z.null()]))
        .optional(),
})

export type Events = z.infer<typeof eventSchema>

export function trackEvent(input: Events): void {
    const event = eventSchema.parse(input)
    if (event) {
        va.track(event.name, event.properties)
    }
}