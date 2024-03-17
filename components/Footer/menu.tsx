'use client'

import { type Menu } from '@/lib/types/menu'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { menus } from '@/lib/menu'

export function Menu(): React.ReactElement {
    return <RenderMenuItems menu={menus} />
}

function RenderMenuItems({ menu }: { menu: Menu[] }): React.ReactElement {
    return (
        <Accordion type='single' collapsible className='w-full'>
            {menu.map((menuItem, index) => (
                <React.Fragment key={menuItem.id + index}>
                    {menuItem.children ? (
                        <AccordionItem className='border-none' value={menuItem.id}>
                            <AccordionTrigger className='mb-2 rounded-md bg-gray-200 px-4 py-2 text-lg font-semibold no-underline hover:no-underline dark:bg-zinc-900'>
                                {menuItem.title}
                            </AccordionTrigger>
                            <AccordionContent className='ml-4 rounded-md py-2 pl-2 text-base font-medium'>
                                <RenderMenuItems menu={menuItem.children} />
                            </AccordionContent>
                        </AccordionItem>
                    ) : (
                        <Link
                            href={menuItem.url}
                            key={menuItem.id + index}
                            className={cn(
                                'flex w-full rounded-md bg-gray-200 px-4 py-2 text-lg font-semibold no-underline hover:no-underline dark:bg-zinc-900',
                                index !== menus.length - 1 && 'mb-2'
                            )}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            {menuItem.title}
                        </Link>
                    )}
                </React.Fragment>
            ))}
        </Accordion>
    )
}
