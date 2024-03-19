import React from 'react'
import { cn } from '@/lib/utils'
import { Balancer } from '@/components/Typography/balancer'

type HTMLHeadingElementProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>

interface HeadingProps extends HTMLHeadingElementProps {
    as: React.ElementType<HTMLHeadingElementProps, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>
}

function Heading({ children, className, as, ...props }: HeadingProps): React.ReactElement {
    const Component = as
    return (
        <Component
            {...props}
            className={cn(
                {
                    'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl': as === 'h1',
                    'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0': as === 'h2',
                    'scroll-m-20 text-2xl font-semibold tracking-tight': as === 'h3',
                    'scroll-m-20 text-xl font-semibold tracking-tight': as === 'h4',
                    'text-lg': as === 'h5',
                    'text-base': as === 'h6',
                },
                className
            )}
        >
            <Balancer>{children}</Balancer>
        </Component>
    )
}

export { Heading }
export type { HeadingProps }

interface ParagraphProps
    extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {}

function P({ children, className, ...props }: ParagraphProps): React.ReactElement {
    return (
        <p {...props} className={cn('leading-7 [&:not(:first-child)]:mt-4', className)}>
            <Balancer>{children}</Balancer>
        </p>
    )
}

export { P }
export type { ParagraphProps }
