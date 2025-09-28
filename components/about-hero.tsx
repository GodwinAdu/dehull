"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Users } from "lucide-react"
import Image from "next/image"

export function AboutHero() {
    return (
        <section className="pt-24 pb-16 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/construction-blueprint-pattern.png')] opacity-5" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="animate-fade-in-up">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full mb-6">
                            <Users className="w-8 h-8 text-secondary" />
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance">
                            About <span className="text-secondary">Dehull Zion</span> Ventures
                        </h1>

                        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 text-pretty leading-relaxed">
                            Building excellence through expertise, integrity, and innovation. We are your trusted partner for all
                            construction and maintenance needs, delivering quality solutions that stand the test of time.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" variant="secondary" className="group">
                                Our Services
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                            >
                                Contact Us
                            </Button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative animate-slide-in-left">
                        <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/about-us-construction-team-professional.jpg"
                                alt="Dehull Zion Ventures construction team"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                        </div>

                        {/* Floating Achievement */}
                        <div className="absolute -bottom-6 -right-6 bg-secondary rounded-xl p-4 shadow-lg text-secondary-foreground">
                            <div className="text-2xl font-bold mb-1">15+</div>
                            <div className="text-sm">Years of Excellence</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
