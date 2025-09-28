"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollReveal() {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.1, rootMargin: "50px" },
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [])

    return { ref, isVisible }
}

export function useParallax() {
    const [scrollY, setScrollY] = useState(0)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect()
                const scrolled = window.scrollY
                const rate = scrolled * -0.5
                setScrollY(rate)
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return { ref, scrollY }
}

export function useMagneticHover() {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const handleMouseMove = (e: MouseEvent) => {
            const rect = element.getBoundingClientRect()
            const x = e.clientX - rect.left - rect.width / 2
            const y = e.clientY - rect.top - rect.height / 2

            element.style.setProperty("--mouse-x", `${x * 0.1}px`)
            element.style.setProperty("--mouse-y", `${y * 0.1}px`)
        }

        const handleMouseLeave = () => {
            element.style.setProperty("--mouse-x", "0px")
            element.style.setProperty("--mouse-y", "0px")
        }

        element.addEventListener("mousemove", handleMouseMove)
        element.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            element.removeEventListener("mousemove", handleMouseMove)
            element.removeEventListener("mouseleave", handleMouseLeave)
        }
    }, [])

    return ref
}

export function AnimatedCounter({
    end,
    duration = 2000,
    suffix = "",
    prefix = "",
}: {
    end: number
    duration?: number
    suffix?: string
    prefix?: string
}) {
    const [count, setCount] = useState(0)
    const { ref, isVisible } = useScrollReveal()

    useEffect(() => {
        if (!isVisible) return

        let startTime: number
        const startCount = 0

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / duration, 1)

            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            setCount(Math.floor(easeOutQuart * (end - startCount) + startCount))

            if (progress < 1) {
                requestAnimationFrame(animate)
            }
        }

        requestAnimationFrame(animate)
    }, [isVisible, end, duration])

    return (
        <span ref={ref} className="font-bold text-2xl md:text-3xl">
            {prefix}
            {count.toLocaleString()}
            {suffix}
        </span>
    )
}

export function TypewriterText({
    text,
    speed = 50,
    className = "",
}: {
    text: string
    speed?: number
    className?: string
}) {
    const [displayText, setDisplayText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const { ref, isVisible } = useScrollReveal()

    useEffect(() => {
        if (!isVisible || currentIndex >= text.length) return

        const timeout = setTimeout(() => {
            setDisplayText((prev) => prev + text[currentIndex])
            setCurrentIndex((prev) => prev + 1)
        }, speed)

        return () => clearTimeout(timeout)
    }, [currentIndex, text, speed, isVisible])

    return (
        <span ref={ref} className={`${className} animate-typewriter`}>
            {displayText}
        </span>
    )
}

export function FloatingElements() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-float animate-delay-100" />
            <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-secondary/20 rounded-full animate-float animate-delay-300" />
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary/30 rounded-full animate-float animate-delay-500" />
            <div className="absolute bottom-1/3 right-1/3 w-2.5 h-2.5 bg-secondary/25 rounded-full animate-float animate-delay-700" />
        </div>
    )
}
