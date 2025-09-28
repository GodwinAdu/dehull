"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react"

export function CTASection() {
    return (
        <section className="py-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl animate-float-delayed" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
                        Get in touch with our expert team today for a free consultation and quote. We're here to bring your
                        construction and maintenance vision to life.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Contact Info */}
                    <div className="space-y-6 animate-slide-in-left">
                        <div className="flex items-center gap-4 glass-card p-4 rounded-2xl">
                            <Phone className="w-8 h-8 text-secondary" />
                            <div>
                                <h3 className="font-bold text-white">Call Us Now</h3>
                                <p className="text-white/80">027 054 4044 / 024 388 1733</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 glass-card p-4 rounded-2xl">
                            <Mail className="w-8 h-8 text-secondary" />
                            <div>
                                <h3 className="font-bold text-white">Email Us</h3>
                                <p className="text-white/80">dehullconstruct@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 glass-card p-4 rounded-2xl">
                            <MapPin className="w-8 h-8 text-secondary" />
                            <div>
                                <h3 className="font-bold text-white">Service Areas</h3>
                                <p className="text-white/80">Nationwide Coverage Available</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-6 animate-slide-in-right">
                        <Button
                            size="lg"
                            variant="secondary"
                            className="w-full group text-lg py-6 rounded-2xl font-semibold shadow-2xl hover:shadow-secondary/25 transition-all duration-300"
                        >
                            Get Your Free Quote Today
                            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full glass-card border-2 border-white/30 text-white hover:bg-white hover:text-primary text-lg py-6 rounded-2xl font-semibold bg-transparent"
                        >
                            Schedule Consultation
                        </Button>

                        <div className="text-center">
                            <p className="text-white/80 text-sm">⚡ Emergency services available 24/7</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
