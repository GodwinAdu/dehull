"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const ArrowRightIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
)

const CheckCircleIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
    </svg>
)

const PhoneIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
    </svg>
)

const PlayIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10V9a2 2 0 012-2h2a2 2 0 012 2v1M9 10v5a2 2 0 002 2h2a2 2 0 002-2v-5"
        />
    </svg>
)

export function HeroSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isVideoPlaying, setIsVideoPlaying] = useState(false)
    const heroRef = useRef<HTMLElement>(null)
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true)
                }
            },
            { threshold: 0.1 },
        )

        if (heroRef.current) {
            observer.observe(heroRef.current)
        }

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e
            const { innerWidth, innerHeight } = window
            setMousePosition({
                x: (clientX / innerWidth - 0.5) * 20,
                y: (clientY / innerHeight - 0.5) * 20,
            })
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 transition-transform duration-1000 ease-out"
                    style={{
                        transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) scale(1.1)`,
                    }}
                >
                    <Image
                        src="/images/dehull-zion-flyer.png"
                        alt="Industrial equipment and construction work"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/70" />

                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" />
                    <div className="absolute top-40 right-20 w-24 h-24 bg-primary-foreground/10 rounded-full blur-lg animate-float-delayed" />
                    <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-secondary/15 rounded-full blur-2xl animate-float-slow" />
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 pb-8">
                <div
                    className={`transition-all duration-1000 ${isInView ? "animate-hero-entrance" : "opacity-0 translate-y-10"}`}
                >
                    <div className="mb-6 sm:mb-8">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-2 text-balance leading-tight">
                            <span className="inline-block animate-slide-in-left">Professional</span>{" "}
                            <span className="inline-block animate-slide-in-left animation-delay-200">Construction</span>{" "}
                            <span className="inline-block animate-slide-in-left animation-delay-400">&</span>
                        </h1>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-secondary animate-slide-in-right animation-delay-600 leading-tight">
                            Maintenance Solutions
                        </h2>
                    </div>

                    <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-3xl mx-auto text-pretty animate-fade-in-up animation-delay-800 px-2">
                        Expert industrial cleaning, waterproofing, painting, and general construction services.
                        <span className="block mt-2 text-secondary font-semibold">
                            Your trusted partner for all building maintenance needs.
                        </span>
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10 max-w-4xl mx-auto">
                        {[
                            { service: "Industrial Cleaning", icon: "🏭" },
                            { service: "Waterproofing", icon: "💧" },
                            { service: "Painting Services", icon: "🎨" },
                            { service: "Pool Repairs", icon: "🏊" },
                        ].map((item, index) => (
                            <div
                                key={item.service}
                                className="group flex items-center justify-center space-x-3 glass-card px-4 py-3 sm:px-6 sm:py-4 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer animate-slide-in-up min-h-[60px]"
                                style={{ animationDelay: `${1000 + index * 150}ms` }}
                            >
                                <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </span>
                                <CheckCircleIcon />
                                <span className="text-primary-foreground font-medium text-sm sm:text-base text-center">
                                    {item.service}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-in-up animation-delay-1200 px-4">
                        <Button
                            size="lg"
                            variant="secondary"
                            className="group magnetic-hover px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-secondary/25 transition-all duration-300 w-full sm:w-auto min-h-[56px]"
                        >
                            <span className="relative z-10">Get Free Quote</span>
                            <ArrowRightIcon />
                            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/80 rounded-2xl opacity-0  transition-opacity duration-300" />
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="group glass-card border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold rounded-2xl magnetic-hover bg-transparent w-full sm:w-auto min-h-[56px]"
                        >
                            <PhoneIcon />
                            <span className="ml-2 sm:ml-3">Call: 027 054 4044</span>
                        </Button>
                    </div>

                    <div className="mt-8 sm:mt-12 animate-fade-in-up animation-delay-1400">
                        <button
                            onClick={() => setIsVideoPlaying(true)}
                            className="group flex items-center justify-center mx-auto glass-card px-6 py-4 rounded-full hover:scale-105 transition-all duration-300 min-h-[56px]"
                        >
                            <PlayIcon />
                            <span className="text-primary-foreground font-medium ml-2">Watch Our Work</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
                <div className="flex flex-col items-center animate-bounce-slow">
                    <span className="text-primary-foreground/70 text-sm mb-2 font-medium">Scroll to explore</span>
                    <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center relative overflow-hidden">
                        <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-scroll-indicator" />
                    </div>
                </div>
            </div>

            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden xl:flex flex-col gap-4">
                <div className="glass-card p-3 rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer group">
                    <PhoneIcon />
                </div>
                <div className="glass-card p-3 rounded-full hover:scale-110 transition-transform duration-300 cursor-pointer group">
                    <ArrowRightIcon />
                </div>
            </div>
        </section>
    )
}
