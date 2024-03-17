import { createClient } from '@/lib/supabase/server'
import { Container } from '@/components/Containers'
import Image from 'next/image'

export default async function Notes() {
    const supabase = createClient()
    const { data: profile, status } = await supabase.from('profiles').select().single<{
        username: string
        full_name: string
        avatar_url: string
        website: string
    }>()

    const storage = await supabase.storage.listBuckets()
    console.log(storage)

    if (status !== 200) {
        return (
            <Container>
                <h1>Failed to fetch data</h1>
            </Container>
        )
    }

    if (!profile) {
        return (
            <Container>
                <h1>No data</h1>
            </Container>
        )
    }

    return (
        <Container>
            <div key={profile.username} className='flex items-center gap-4'>
                <img
                    src={profile.avatar_url}
                    alt={profile.full_name}
                    width={100}
                    height={100}
                    className='rounded-full'
                />
                <div>
                    <h2>{profile.full_name}</h2>
                    <p>{profile.website}</p>
                </div>
            </div>
        </Container>
    )
}
