"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

const stats = [
    { number: 500, suffix: "+", label: "Projects Completed", icon: "🏗️" },
    { number: 15, suffix: " Years", label: "Industry Experience", icon: "⭐" },
    { number: 98, suffix: "%", label: "Client Satisfaction", icon: "😊" },
    { number: 24, suffix: "/7", label: "Emergency Service", icon: "🚨" },
]

export function StatsSection() {
    const [counters, setCounters] = useState(stats.map(() => 0))
    const sectionRef = useRef<HTMLElement>(null)
    const isInView = useInView(sectionRef, { once: true })

    useEffect(() => {
        if (isInView) {
            stats.forEach((stat, index) => {
                let start = 0
                const end = stat.number
                const duration = 2000
                const increment = end / (duration / 16)

                const timer = setInterval(() => {
                    start += increment
                    if (start >= end) {
                        setCounters((prev) => {
                            const newCounters = [...prev]
                            newCounters[index] = end
                            return newCounters
                        })
                        clearInterval(timer)
                    } else {
                        setCounters((prev) => {
                            const newCounters = [...prev]
                            newCounters[index] = Math.floor(start)
                            return newCounters
                        })
                    }
                }, 16)

                return () => clearInterval(timer)
            })
        }
    }, [isInView])

    return (
        <section ref={sectionRef} className="py-20 bg-gradient-to-br from-background to-muted/50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
                        Trusted by Hundreds of Clients
                    </h2>
                    <p className="text-xl text-muted-foreground animate-fade-in-up animation-delay-200">
                        Our numbers speak for our commitment to excellence
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="text-center group animate-scale-in"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div className="glass-card p-8 rounded-3xl hover:scale-105 transition-all duration-500 hover:shadow-2xl">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                                    {counters[index]}
                                    {stat.suffix}
                                </div>
                                <p className="text-muted-foreground font-medium">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
