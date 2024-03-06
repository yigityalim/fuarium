import createJiti from 'jiti'

const jiti = createJiti(new URL(import.meta.url).pathname)

jiti('./env.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fuarium.de',
            },
        ],
    },
    transpilePackages: ['lucide-react'],
}

export default nextConfig
