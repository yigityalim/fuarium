import React from 'react'
import { cn } from '@/lib/utils'
import styles from './spinner.module.css'

interface SpinnerProps extends React.ComponentProps<'svg'> {
    fullHeight?: boolean
}

export function Spinner({ className, fullHeight, ...props }: SpinnerProps): React.ReactElement {
    return (
        <div
            className={cn(
                'flex w-full items-center justify-center',
                fullHeight ? 'min-h-[calc(100dvh-120px)]' : 'min-h-full',
                className
            )}
        >
            <svg viewBox='0 0 100 100' className={cn(styles.spinner, className)} {...props}>
                <circle cx='50' cy='50' r='45' stroke='currentColor' />
            </svg>
        </div>
    )
}
