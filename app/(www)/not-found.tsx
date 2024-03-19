import { Container } from '@/components/Containers'
import Link from 'next/link'

export default function NotFound() {
    return (
        <Container title='Sayfa Bulunamadı.'>
            <h1 className='text-center text-4xl font-bold'>404</h1>
            <p className='text-center'>Sayfa bulunamadı.</p>
            <Link
                href='/'
                className='mt-4 block text-center text-lg font-bold text-blue-500 underline hover:text-blue-700'
            >
                Anasayfa&apos;ya dön
            </Link>
        </Container>
    )
}
