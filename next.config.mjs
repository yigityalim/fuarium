

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
