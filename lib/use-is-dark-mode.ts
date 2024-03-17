'use client'
import { useEffect, useState } from 'react'
export function useIsDarkMode(): boolean {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
    useEffect(() => {
        const mediaQuery: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')
        setIsDarkMode(mediaQuery.matches)
        const handler = () => setIsDarkMode(mediaQuery.matches)
        mediaQuery.addEventListener('change', handler)
        return () => mediaQuery.removeEventListener('change', handler)
    }, [])
    return isDarkMode
}