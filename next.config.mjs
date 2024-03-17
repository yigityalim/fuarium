import { fileURLToPath } from "node:url";
import createJiti from "jiti";
//const jiti = createJiti(fileURLToPath(import.meta.url));
//jiti("./env.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fuarium.de',
            },
            // test amaçlı eklendi. prod ortamında kendi backend'ine fotoğrafları yükle
            {
                protocol: 'https',
                hostname: 'www.freewebheaders.com'
            },
            {
                protocol: 'https',
                hostname: 'fuarium-blob.public.blob.vercel-storage.com',
                port: '',
            }
        ],
    },
    transpilePackages: ['lucide-react'],
}

export default nextConfig
