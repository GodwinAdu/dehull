"use client"

import { useState, useEffect } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        company: "Industrial Solutions Ltd",
        rating: 5,
        text: "Dehull Zion Ventures transformed our facility with their exceptional waterproofing services. Professional, reliable, and outstanding results.",
        image: "/professional-woman-testimonial.jpg",
    },
    {
        id: 2,
        name: "Michael Chen",
        company: "Oceanview Resort",
        rating: 5,
        text: "Their pool repair service was incredible. They restored our pool to better than new condition. Highly recommend their expertise.",
        image: "/professional-man-testimonial.jpg",
    },
    {
        id: 3,
        name: "Emma Williams",
        company: "Metro Office Complex",
        rating: 5,
        text: "The painting and maintenance work exceeded our expectations. The team was professional and completed everything on schedule.",
        image: "/professional-woman-testimonial-2.jpg",
    },
]

export function TestimonialsCarousel() {
    const [activeTestimonial, setActiveTestimonial] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    return (
        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary rounded-full blur-3xl animate-float-delayed" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-muted-foreground animate-fade-in-up animation-delay-200">
                        Real feedback from satisfied customers
                    </p>
                </div>

                <div className="relative">
                    <div className="glass-card p-8 md:p-12 rounded-3xl text-center min-h-[300px] flex flex-col justify-center">
                        <Quote className="w-12 h-12 text-secondary mx-auto mb-6 opacity-50" />

                        <p className="text-xl md:text-2xl text-foreground mb-8 font-medium leading-relaxed animate-fade-in">
                            "{testimonials[activeTestimonial].text}"
                        </p>

                        <div className="flex items-center justify-center gap-1 mb-6">
                            {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>

                        <div className="flex items-center justify-center gap-4">
                            <div className="w-16 h-16 rounded-full overflow-hidden">
                                <img
                                    src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                                    alt={testimonials[activeTestimonial].name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-left">
                                <h4 className="font-bold text-foreground">{testimonials[activeTestimonial].name}</h4>
                                <p className="text-muted-foreground">{testimonials[activeTestimonial].company}</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation dots */}
                    <div className="flex justify-center mt-8 gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeTestimonial ? "bg-primary scale-125" : "bg-muted-foreground/30"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
