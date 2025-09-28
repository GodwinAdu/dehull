"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Lightbulb, CheckCircle, Clock, Award } from "lucide-react"

const values = [
    {
        icon: Shield,
        title: "Integrity",
        description: "We conduct business with honesty, transparency, and ethical practices in every interaction.",
    },
    {
        icon: Award,
        title: "Excellence",
        description: "We strive for the highest quality in everything we do, continuously improving our services.",
    },
    {
        icon: Users,
        title: "Customer Focus",
        description: "Our clients' success is our success. We listen, understand, and deliver solutions that matter.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "We embrace new technologies and methods to provide better, more efficient solutions.",
    },
    {
        icon: CheckCircle,
        title: "Reliability",
        description: "We deliver on our promises, meeting deadlines and exceeding expectations consistently.",
    },
    {
        icon: Clock,
        title: "Timeliness",
        description: "We respect your time and ensure all projects are completed within agreed timelines.",
    },
]

export function CompanyValues() {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                        These fundamental principles guide our decisions, shape our culture, and define how we serve our clients and
                        community.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => {
                        const Icon = value.icon
                        return (
                            <Card
                                key={value.title}
                                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <CardContent className="pt-8 pb-6 text-center">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                                        <Icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {value.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
