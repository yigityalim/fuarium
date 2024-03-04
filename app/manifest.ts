import { MetadataRoute } from 'next'

export default function manifes(): MetadataRoute.Manifest {
    return {
        name: 'Fuarium',
        short_name: 'fuiarum',
        description: 'Fuarium is a modern web application for fairs and exhibitions.',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
