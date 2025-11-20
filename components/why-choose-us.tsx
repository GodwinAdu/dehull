"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, Clock, Shield, Users, CheckCircle, Star } from "lucide-react"

const features = [
    {
        icon: Award,
        title: "Expert Professionals",
        description: "Highly skilled technicians with years of experience in construction and maintenance services.",
    },
    {
        icon: Clock,
        title: "Timely Delivery",
        description: "We respect your time and ensure all projects are completed within agreed timelines.",
    },
    {
        icon: Shield,
        title: "Quality Guarantee",
        description: "All our work comes with comprehensive warranties and quality assurance guarantees.",
    },
    {
        icon: Users,
        title: "Customer Focused",
        description: "Dedicated to providing exceptional customer service and building lasting relationships.",
    },
]

const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "6+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
]

export function WhyChooseUs() {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Dehull Zion Ventures?</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                        We combine expertise, reliability, and exceptional service to deliver outstanding results for every project,
                        no matter the size or complexity.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="text-center animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                            <div className="text-muted-foreground font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <Card
                                key={feature.title}
                                className="text-center border-border/50 hover:shadow-md transition-shadow duration-300"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <CardContent className="pt-8 pb-6">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 text-center">
                    <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
                        <div className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-secondary" />
                            <span className="font-medium">Licensed & Insured</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Star className="w-5 h-5 text-secondary" />
                            <span className="font-medium">5-Star Rated Service</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Shield className="w-5 h-5 text-secondary" />
                            <span className="font-medium">Quality Guaranteed</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
