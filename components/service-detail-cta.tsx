"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Phone, Mail, MessageSquare } from "lucide-react"
import type { Service } from "@/lib/services-data"

interface ServiceDetailCTAProps {
    service: Service
}

export function ServiceDetailCTA({ service }: ServiceDetailCTAProps) {
    return (
        <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <Card>
                        <CardContent className="p-8">
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold mb-2">Get Your Free Quote</h2>
                                <p className="text-muted-foreground">
                                    Ready to get started with {service.title.toLowerCase()}? Fill out the form below for a free
                                    consultation and detailed quote.
                                </p>
                            </div>

                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input placeholder="Your Name" />
                                    <Input placeholder="Phone Number" />
                                </div>
                                <Input placeholder="Email Address" />
                                <Input placeholder="Property Address" />
                                <Textarea placeholder="Describe your project requirements..." className="min-h-[120px]" />
                                <Button className="w-full group">
                                    <MessageSquare className="mr-2 w-4 h-4" />
                                    Send Quote Request
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <Card className="bg-primary text-primary-foreground">
                            <CardContent className="p-8">
                                <h3 className="text-xl font-semibold mb-6">Ready to Get Started?</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <Phone className="w-6 h-6 text-secondary mt-1" />
                                        <div>
                                            <div className="font-medium mb-1">Call Us Now</div>
                                            <div className="text-primary-foreground/90">027 054 4044</div>
                                            <div className="text-primary-foreground/90">024 388 1733</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <Mail className="w-6 h-6 text-secondary mt-1" />
                                        <div>
                                            <div className="font-medium mb-1">Email Us</div>
                                            <div className="text-primary-foreground/90">dehullconstruct@gmail.com</div>
                                            <div className="text-primary-foreground/90">dinahokyere201@gmail.com</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-primary-foreground/20">
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-secondary">24/7</div>
                                            <div className="text-sm text-primary-foreground/80">Emergency Service</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-secondary">Free</div>
                                            <div className="text-sm text-primary-foreground/80">Consultation</div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6">
                                <h4 className="font-semibold mb-4">Why Choose Us for {service.title}?</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-sm">
                                        <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                                        {service.warranty} warranty on all work
                                    </li>
                                    <li className="flex items-center text-sm">
                                        <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                                        Licensed and insured professionals
                                    </li>
                                    <li className="flex items-center text-sm">
                                        <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                                        Free consultation and quote
                                    </li>
                                    <li className="flex items-center text-sm">
                                        <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                                        Satisfaction guaranteed
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
