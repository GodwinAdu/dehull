"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Wrench } from "lucide-react"

export function ServicesHero() {
    return (
        <section className="pt-24 pb-16 bg-gradient-to-br from-primary to-primary/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full mb-6">
                        <Wrench className="w-8 h-8 text-secondary" />
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance">
                        Professional Services
                    </h1>

                    <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-4xl mx-auto text-pretty">
                        Comprehensive construction and maintenance solutions delivered by experienced professionals. From industrial
                        cleaning to complete construction projects, we handle it all with precision and care.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="group">
                            Get Free Consultation
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                        >
                            View Our Portfolio
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
