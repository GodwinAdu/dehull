"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react"

export function ContactHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/construction-blueprint-pattern.png')] opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance">
            Get In <span className="text-secondary">Touch</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-4xl mx-auto text-pretty">
            Ready to start your project? We're here to help with expert consultation, detailed quotes, and professional
            service. Contact us today to discuss your construction and maintenance needs.
          </p>

          {/* Quick Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Phone className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold text-primary-foreground mb-2">Call Us</h3>
              <div className="text-primary-foreground/90 text-sm">
                <div>027 054 4044</div>
                <div>024 388 1733</div>
              </div>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Mail className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold text-primary-foreground mb-2">Email Us</h3>
              <div className="text-primary-foreground/90 text-sm">
                <div>dehullconstruct@gmail.com</div>
                <div>dinahokyere201@gmail.com</div>
              </div>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <MapPin className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold text-primary-foreground mb-2">Visit Us</h3>
              <div className="text-primary-foreground/90 text-sm">
                <div>Serving Ghana and</div>
                <div>surrounding areas</div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Button size="lg" variant="secondary" className="group">
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
