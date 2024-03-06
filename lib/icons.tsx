'use client'
import { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import { UseThemeProps } from 'next-themes/dist/types'
import dynamic from 'next/dynamic'
import React from 'react'
import { useTheme } from 'next-themes'

interface IconProps extends LucideProps {
    name: keyof typeof dynamicIconImports
}

const Icon = ({ name, ...props }: IconProps) => {
    const LucideIcon = dynamic(dynamicIconImports[name])
    return <LucideIcon {...props} />
}

type BrandIconProps = React.HTMLAttributes<SVGElement> & {
    theme: UseThemeProps['resolvedTheme']
}

export const BrandIcon = () => {
    const {resolvedTheme} = useTheme()
    return resolvedTheme === 'dark' ? (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='xMidYMid'
            viewBox='0 0 200 60'
            className='z-[54] h-[60px] w-[200px]'
        >
            <image
                xlinkHref='data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAA3sAAACsCAMAAAD1wEXbAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAANlBMVEUAAAD///////////////////////////////////////////////////////////////8AAADx3eDuAAAAEHRSTlMAMEBggBCfzyCvcO+/j1Df7rcLDQAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxIAAAsSAdLdfvwAABiYSURBVHja7V3rgrMqDGy9VFtt7fs/7anaCwiZJEi759PMv+0KhpCBkAAeDnIci7J6oihqRUGDwbAGp7uL4q/FMRh2grq5R7jXni/tX0tmMGwaS+rdZ8qNvzYX8z8Nhm/h2C2od59+rp5/nMwDNRi+gpB6/fSz87exz2DIj5B692r8vXd/uaRX32dE0ltKiZig/HGNdq90vae1PafV3rWqymJVa2B7+m+WHVGCpqXp6ry2Cw6HW6JAIyLUm0ItZcjGJBT3jEh6i0h2UH7NpN/ev1QxIzPCcK7Sk0g9qPibZUdUdHGWu2tsA2JIFOgQp173+L3uMsm4b+5dUWvWTnxrNNlUaRPgxrjXrQ3kV6kCxak32cSiTuNeEurujrCy41cqc7gmvH9j3BPNTwBtl1xvlHr3W+grGfeScMHNES0KkmQWQrYWdrE17o3GvgLnZIHi1BtdztPit5f96iXdNfeGO0S3LneaQ6ODkn2b496wpg+KZIHquGmcvPzCjKf91vdeK+qeuVfeGainHanMCgyq9m2Oe6vCLUOqQMFulieOES09BXwYU6Mk3565h4xtwrCi33Nx734/K7p0e9xbsepOF4hQRROz5Kf9ju5tpwuQ7Zh7gqavWm1kU2snF2OD3EsOt7RdaqUnolQZU9Jsv/XcUyry7Zh7pzuLVWG2jIoVO14b5F6y54/6FwpEheAe6/+IIc99c3s+opml98s9mFd/Yc02k5yaPQn9zi1yLzHkBS0bCXQjOyGqo9n+XkTXrPn2yz2YV3fUnYycmpX26Ra5l5jraVCVQKAj6aq2YZDz/rK/d1inkUu4W+4xefWPvpORU7NS8m2Se0neB87d0gLVDSgTc2Mn+3NIKR+ud8s9NsGgkE4tcwpEG4u3yb2EZTcztNI1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'
                width='200'
                height='60'
                fill='#fff'
            />
        </svg>
    ) : (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            preserveAspectRatio='xMidYMid'
            viewBox='0 0 200 60'
            className='h-[60px] w-[200px]'
        >
            <image
                xlinkHref='data:img/png;base64,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'
                width='200'
                height='60'
            />
        </svg>
    )
}

export { Icon }
export type { IconProps }
