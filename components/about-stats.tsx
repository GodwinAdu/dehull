"use client"

import { Card, CardContent } from "@/components/ui/card"

const stats = [
    {
        number: "500+",
        label: "Successful Projects",
        description: "Completed across residential and commercial sectors",
    },
    {
        number: "6+",
        label: "Years of Experience",
        description: "Building expertise and trust in the industry",
    },
    {
        number: "100%",
        label: "Client Satisfaction",
        description: "Committed to exceeding expectations every time",
    },
    {
        number: "24/7",
        label: "Emergency Support",
        description: "Available when you need us most",
    },
    {
        number: "50+",
        label: "Skilled Professionals",
        description: "Expert team members dedicated to quality",
    },
    {
        number: "10+",
        label: "Service Categories",
        description: "Comprehensive solutions for all your needs",
    },
]

export function AboutStats() {
    return (
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/construction-blueprint-pattern.png')] opacity-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Track Record</h2>
                    <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
                        Numbers that reflect our commitment to excellence and the trust our clients place in us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <Card
                            key={stat.label}
                            className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <CardContent className="pt-8 pb-6 text-center">
                                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">{stat.number}</div>
                                <div className="text-lg font-semibold text-primary-foreground mb-2">{stat.label}</div>
                                <div className="text-sm text-primary-foreground/80 leading-relaxed">{stat.description}</div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
