import React from 'react'
import { Container } from '@/components/Containers'
import { contact as mockContact } from '@/mock/contact'
import { Icon } from '@/lib/icons'
import { Heading, P } from '@/components/Typography'
import { Metadata } from 'next'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export const metadata = {
    title: 'İletişim',
    description: 'Fuarium Business Travel Services iletişim bilgileri',
} satisfies Metadata

export default async function Page() {
    return (
        <Container title='İletişim'>
            <React.Suspense fallback={<div>Yükleniyor...</div>}>
                <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.050450482474!2d32.856582976670026!3d39.9178871715242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34fab7ff58f57%3A0x8928a736ee820a5a!2sFuarium%20Business%20Travel%20Services!5e0!3m2!1str!2str!4v1710862865271!5m2!1str!2str'
                    width='600'
                    height='450'
                    allowFullScreen
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    className='w-full'
                />
            </React.Suspense>
            <div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-3'>
                {mockContact.map((contact, index) => (
                    <Section key={index} contact={contact} />
                ))}
            </div>
            <div className='mt-4 w-full rounded bg-[#F7F7F7] p-4'>
                <Heading as='h2'>Bize Ulaşın</Heading>
                <form className='mt-4 flex w-full flex-col gap-2'>
                    <Input type='text' name='name' placeholder='Adınızı giriniz' />
                    <Textarea name='message' placeholder='Mesajınızı giriniz' />
                    <Input type='email' name='email' placeholder='E-Postanızı giriniz' />
                    <Button type='submit' className='w-full'>
                        Gönder
                    </Button>
                </form>
            </div>
        </Container>
    )
}

function Section({ contact }: { contact: (typeof mockContact)[number] }): React.ReactElement {
    return (
        <section className='flex flex-col items-start justify-center gap-2 rounded p-4 even:bg-[#F7F7F7]'>
            <Icon name={contact.icon} className='size-12' />
            {Array.isArray(contact.value) ? (
                <ul>
                    {contact.value.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))}
                </ul>
            ) : (
                <P>{contact.value}</P>
            )}
        </section>
    )
}
