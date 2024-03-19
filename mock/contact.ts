import type { IconProps } from '@/lib/icons'

export const contact = [
    {
        id: 'phone',
        icon: 'phone',
        value: ['+90 312 425 05 01', '+90 312 425 05 02'],
    },
    {
        id: 'maps',
        icon: 'map',
        value: 'Kızılay Mah.Bayındır 2 Sokak No 62/8 Çankaya/Ankara 06420 Türkiye',
    },
    {
        id: 'email',
        icon: 'mail',
        value: 'info@fuarium.eu',
    },
] satisfies {
    id: string
    icon: IconProps['name']
    value: string | string[]
}[]
