"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, Award, Phone, ArrowRight, Droplets, Paintbrush, Zap, Waves, Shield, Home, Building } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Service } from "@/lib/services-data"

interface ServiceDetailHeroProps {
    service: Service
}

const iconMap = {
    Droplets,
    Paintbrush,
    Zap,
    Waves,
    Shield,
    Home,
    Building,
}

export function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
    const Icon = iconMap[service.icon as keyof typeof iconMap] || Droplets

    return (
        <section className="pt-20 pb-16 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/construction-blueprint-pattern.png')] opacity-5" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <Link
                        href="/services"
                        className="inline-flex items-center text-primary-foreground/80 hover:text-secondary transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Services
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="animate-fade-in-up">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-16 h-16 bg-secondary/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                <Icon className="w-8 h-8 text-secondary" />
                            </div>
                            <div className="flex gap-2">
                                <Badge variant="secondary" className="bg-secondary/90 backdrop-blur-sm">
                                    <Clock className="w-3 h-3 mr-1" />
                                    {service.duration}
                                </Badge>
                                <Badge
                                    variant="outline"
                                    className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground"
                                >
                                    <Award className="w-3 h-3 mr-1" />
                                    {service.warranty} Warranty
                                </Badge>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance">
                            {service.title}
                        </h1>

                        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 text-pretty leading-relaxed">
                            {service.longDescription}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" variant="secondary" className="group">
                                Get Free Quote
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                            >
                                <Phone className="mr-2 w-5 h-5" />
                                Call Now
                            </Button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative animate-slide-in-left">
                        <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={service.image || "/placeholder.svg"}
                                alt={service.title}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                        </div>

                        {/* Floating Stats */}
                        <div className="absolute -bottom-6 -left-6 bg-primary-foreground rounded-xl p-4 shadow-lg">
                            <div className="text-2xl font-bold text-primary mb-1">{service.pricing.starting}</div>
                            <div className="text-sm text-muted-foreground">Starting Price</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
