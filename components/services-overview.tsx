"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Droplets, Paintbrush, Waves, Home, Shield, Building, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
    {
        icon: Droplets,
        title: "Treatment of Rising Dampness",
        description:
            "Professional damp proofing solutions to protect your property from moisture damage and structural issues.",
        features: ["Moisture assessment", "Chemical injection", "Membrane installation"],
        slug: "dampness-treatment",
    },
    {
        icon: Zap,
        title: "Industrial Cleaning",
        description: "Comprehensive cleaning services for industrial facilities, equipment, and commercial spaces.",
        features: ["Equipment cleaning", "Facility maintenance", "Safety compliance"],
        slug: "industrial-cleaning",
    },
    {
        icon: Paintbrush,
        title: "Painting Services",
        description: "Professional interior and exterior painting for residential and commercial properties.",
        features: ["Surface preparation", "Quality materials", "Expert application"],
        slug: "painting-services",
    },
    {
        icon: Waves,
        title: "Swimming Pool Repairs",
        description: "Complete pool maintenance, repair, and renovation services to keep your pool in perfect condition.",
        features: ["Leak detection", "Surface repair", "Equipment servicing"],
        slug: "pool-repairs",
    },
    {
        icon: Shield,
        title: "Roof Leakage Repair",
        description: "Expert roof repair and waterproofing services to protect your property from water damage.",
        features: ["Leak detection", "Structural repair", "Preventive maintenance"],
        slug: "roof-repairs",
    },
    {
        icon: Home,
        title: "Tie Hole & Honey Comb Repairs",
        description: "Specialized concrete repair services for structural integrity and aesthetic improvement.",
        features: ["Structural assessment", "Concrete restoration", "Surface finishing"],
        slug: "concrete-repairs",
    },
    {
        icon: Shield,
        title: "Fibre Coatings",
        description: "Advanced protective coatings for enhanced durability and weather resistance.",
        features: ["Surface protection", "Weather resistance", "Long-lasting finish"],
        slug: "fibre-coatings",
    },
    {
        icon: Building,
        title: "General Construction",
        description: "Comprehensive construction services for residential and commercial projects.",
        features: ["Project management", "Quality construction", "Timely delivery"],
        slug: "general-construction",
    },
    {
        icon: Droplets,
        title: "Waterproofing Treatment",
        description: "Complete waterproofing solutions for tanks, basements, lift chambers, and more.",
        features: ["Basement waterproofing", "Tank sealing", "Structural protection"],
        slug: "waterproofing",
    },
]

export function ServicesOverview() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Professional Services</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                        Comprehensive construction and maintenance solutions delivered by experienced professionals with a
                        commitment to quality and reliability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <Card
                                key={service.slug}
                                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <CardHeader>
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {service.title}
                                    </CardTitle>
                                    <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center text-sm text-muted-foreground">
                                                <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href={`/services/${service.slug}`}>
                                        <Button
                                            variant="outline"
                                            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                                        >
                                            Learn More
                                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                <div className="text-center mt-12">
                    <Link href="/services">
                        <Button size="lg" className="group">
                            View All Services
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
