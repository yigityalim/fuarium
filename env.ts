import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'
import { vercel } from '@t3-oss/env-core/presets'

export const env = createEnv({
    isServer: typeof window === undefined,
    server: {
        BASE_URL: z.string().url(),
        BLOB_READ_WRITE_TOKEN: z.string(),
    },
    clientPrefix: 'NEXT_PUBLIC',
    client: {
        NEXT_PUBLIC_RESEND_API_KEY: z.string(),
        NEXT_PUBLIC_SUPABASE_URL: z.string(),
        NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
    },
    runtimeEnv: {
        BASE_URL: process.env.BASE_URL,
        BLOB_READ_WRITE_TOKEN: process.env.BLOB_READ_WRITE_TOKEN,
        NEXT_PUBLIC_RESEND_API_KEY: process.env.NEXT_PUBLIC_RESEND_API_KEY,
        NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
        NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    },
    extends: [vercel],
})
