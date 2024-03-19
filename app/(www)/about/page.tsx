import React from 'react'
import { Container } from '@/components/Containers'
import { about as mockAbout } from '@/mock/about'
import { cn } from '@/lib/utils'
import { Heading, P } from '@/components/Typography'
import Image from 'next/image'

export default function Page(): React.ReactElement {
    return (
        <Container
            title='Hakkımızda'
            mainClassName='px-0 flex flex-col gap-y-4 items-start justify-center'
            breadcrumbClassName='px-4'
        >
            {mockAbout.map((section, i) => (
                <Section key={i} section={section} />
            ))}
        </Container>
    )
}

function Section({ section }: { section: (typeof mockAbout)[number] }): React.ReactElement {
    return (
        <section
            key={section.id}
            className={cn(
                'flex w-full flex-col items-center justify-center gap-4 p-4 even:bg-[#f7f7f7] dark:odd:bg-zinc-950'
            )}
        >
            <Heading as='h3'>{section.title}</Heading>
            {section.content && <P>{section.content}</P>}
            {section.content && (
                <Image src={section.image} width={800} height={400} alt={section.title} className='rounded-lg' />
            )}
        </section>
    )
}
