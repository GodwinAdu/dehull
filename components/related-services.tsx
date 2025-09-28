"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { getRelatedServices } from "@/lib/services-data"
import type { Service } from "@/lib/services-data"

interface RelatedServicesProps {
    currentService: Service
}

export function RelatedServices({ currentService }: RelatedServicesProps) {
    const relatedServices = getRelatedServices(currentService.slug, 3)

    if (relatedServices.length === 0) {
        return null
    }

    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4">Related Services</h2>
                    <p className="text-xl text-muted-foreground">
                        Explore our other professional services that might interest you
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {relatedServices.map((service) => {
                        const Icon = service.icon
                        return (
                            <Card
                                key={service.slug}
                                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            >
                                <CardHeader>
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-lg group-hover:text-primary transition-colors">{service.title}</CardTitle>
                                    <CardDescription>{service.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
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
            </div>
        </section>
    )
}
