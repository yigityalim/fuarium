'use client'

import React from 'react'
import { Balancer as BalancerPrimitive } from 'react-wrap-balancer'
import { cn } from '@/lib/utils'

export interface BalancerProps extends React.ComponentProps<typeof BalancerPrimitive> {}

export function Balancer({ children, className, ...props }: BalancerProps): React.ReactElement {
    return (
        <BalancerPrimitive className={cn(className)} {...props}>
            {children}
        </BalancerPrimitive>
    )
}
