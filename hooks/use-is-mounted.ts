import { MutableRefObject, useEffect, useRef } from 'react'

export function useIsMounted(): boolean {
    const isMounted: MutableRefObject<boolean> = useRef<boolean>(false)
    useEffect(() => {
        isMounted.current = true
        return () => {
            isMounted.current = false
        }
    }, [])
    return isMounted.current
}
