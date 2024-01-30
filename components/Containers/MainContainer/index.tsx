import React from 'react'
import { cn } from '@/lib/utils'

interface MainContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
}

const MainContainer = React.forwardRef<HTMLDivElement, MainContainerProps>(
    ({ as: Component = 'div', className, ...props }, ref) => {
        return <Component ref={ref} className={cn('p-4 md:container sm:p-6 md:mx-auto md:p-8', className)} {...props} />
    }
)

MainContainer.displayName = 'MainContainer'

export { MainContainer }
export type { MainContainerProps }
