'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useMenu } from '@/store/menu'

export function ToggleMenu(): React.JSX.Element {
    const isOpen = useMenu((state) => state.isOpen)
    const toggle = useMenu((state) => state.toggle)
    return (
        <Button variant='link' size='icon' onClick={toggle}>
            <div className='flex h-full w-full flex-col items-center justify-center gap-y-2'>
                <span
                    className={cn(
                        'h-0.5 w-2/3 bg-black transition-all duration-300 dark:bg-white',
                        isOpen && 'translate-y-[5px] rotate-45 transform'
                    )}
                />
                <span
                    className={cn(
                        'h-0.5 w-2/3 bg-black transition-all duration-300 dark:bg-white',
                        isOpen && '-translate-y-[5px] -rotate-45 transform'
                    )}
                />
            </div>
        </Button>
    )
}
