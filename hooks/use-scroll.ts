import { useCallback, useEffect, useState } from 'react'

export const useScroll = (offset: number, initial?: number): boolean => {
    const [show, setShow] = useState<boolean>(true)
    const [prevScrollPos, setPrevScrollPos] = useState<number>(initial ?? 0)
    const handlePrevScrollPos: (pos: number) => void = useCallback<(pos: number) => void>(
        (pos: number): void => setPrevScrollPos(pos),
        []
    )
    const handleShowHeader: (val: boolean) => void = useCallback<(val: boolean) => void>(
        (val: boolean): void => setShow(val),
        []
    )

    useEffect(() => {
        const handleScroll = (): void => {
            const currentScrollPos: number = window.scrollY
            const visible: boolean = prevScrollPos > currentScrollPos
            const isTop: boolean = currentScrollPos > offset
            if (isTop) handleShowHeader(isTop && visible)
            handlePrevScrollPos(currentScrollPos)
        }
        window.addEventListener('scroll', handleScroll)
        return (): void => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [prevScrollPos, handleShowHeader, handlePrevScrollPos, show, offset])

    return show
}

export const useScrollToThreshold = (threshold?: number): boolean => {
    const [scrollUp, setScrollUp] = useState<boolean>(false)

    useEffect(() => {
        if (!threshold) return
        const handleScroll = () => void setScrollUp(window.scrollY > threshold)
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [threshold])

    if (!threshold) return true
    return scrollUp
}
