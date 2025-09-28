"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Phone, Mail, CheckCircle } from "lucide-react"

export function ServicesCTA() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Card className="bg-gradient-to-r from-primary to-primary/90 border-0 text-primary-foreground overflow-hidden relative">
                    <div className="absolute inset-0 bg-[url('/construction-blueprint-pattern.png')] opacity-10" />

                    <CardContent className="relative p-8 md:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Start Your Project?</h2>
                                <p className="text-xl text-primary-foreground/90 mb-6 text-pretty">
                                    Get a free consultation and detailed quote for your construction or maintenance project. Our experts
                                    are ready to help you achieve your goals.
                                </p>

                                <div className="space-y-3 mb-8">
                                    {[
                                        "Free project consultation and assessment",
                                        "Detailed quotes with transparent pricing",
                                        "Professional project management",
                                        "Quality guarantee on all work",
                                    ].map((item, index) => (
                                        <div key={item} className="flex items-center space-x-3">
                                            <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                                            <span className="text-primary-foreground/90">{item}</span>
                                        </div>
                                    ))}
                                </div>

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

                            <div className="space-y-6">
                                <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
                                    <CardContent className="p-6">
                                        <h3 className="font-semibold text-lg text-primary-foreground mb-4">Contact Information</h3>
                                        <div className="space-y-3">
                                            <div className="flex items-center space-x-3">
                                                <Phone className="w-5 h-5 text-secondary" />
                                                <div>
                                                    <div className="text-primary-foreground font-medium">027 054 4044</div>
                                                    <div className="text-primary-foreground/80 text-sm">024 388 1733</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <Mail className="w-5 h-5 text-secondary" />
                                                <div>
                                                    <div className="text-primary-foreground font-medium">dehullconstruct@gmail.com</div>
                                                    <div className="text-primary-foreground/80 text-sm">dinahokyere201@gmail.com</div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-secondary mb-1">500+</div>
                                        <div className="text-primary-foreground/80 text-sm">Projects Completed</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-secondary mb-1">15+</div>
                                        <div className="text-primary-foreground/80 text-sm">Years Experience</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-secondary mb-1">100%</div>
                                        <div className="text-primary-foreground/80 text-sm">Client Satisfaction</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-secondary mb-1">24/7</div>
                                        <div className="text-primary-foreground/80 text-sm">Support Available</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
