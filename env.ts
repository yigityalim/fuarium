import { vercel } from '@t3-oss/env-core/presets'
import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
    isServer: typeof window === 'undefined',
    client: {
        NEXT_PUBLIC_BASE_URL: z.string().url(),
    },
    runtimeEnv: {
        NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    },
    extends: [vercel],
})
