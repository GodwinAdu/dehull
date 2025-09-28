"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, MessageSquare, Calendar } from "lucide-react"

export function ContactCTA() {
    return (
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/construction-blueprint-pattern.png')] opacity-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
                    <CardContent className="p-8 md:p-12">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
                            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
                                Don't wait any longer. Contact us today and let's discuss how we can help you achieve your construction
                                and maintenance goals with professional expertise and reliable service.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Phone className="w-8 h-8 text-secondary" />
                                </div>
                                <h3 className="font-semibold mb-2">Call Now</h3>
                                <p className="text-primary-foreground/80 text-sm">Immediate response for urgent needs</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Mail className="w-8 h-8 text-secondary" />
                                </div>
                                <h3 className="font-semibold mb-2">Email Us</h3>
                                <p className="text-primary-foreground/80 text-sm">Detailed inquiries and documentation</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <MessageSquare className="w-8 h-8 text-secondary" />
                                </div>
                                <h3 className="font-semibold mb-2">Get Quote</h3>
                                <p className="text-primary-foreground/80 text-sm">Free detailed project estimates</p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Calendar className="w-8 h-8 text-secondary" />
                                </div>
                                <h3 className="font-semibold mb-2">Schedule</h3>
                                <p className="text-primary-foreground/80 text-sm">Book a free consultation</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button size="lg" variant="secondary" className="group">
                                <Phone className="mr-2 w-5 h-5" />
                                Call 027 054 4044
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                            >
                                <Mail className="mr-2 w-5 h-5" />
                                Send Email
                            </Button>
                        </div>

                        <div className="text-center mt-8 pt-8 border-t border-primary-foreground/20">
                            <p className="text-primary-foreground/80 text-sm">
                                <strong>Emergency Services Available 24/7</strong> • Average Response Time: 2-4 Hours • Free
                                Consultations & Quotes
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
