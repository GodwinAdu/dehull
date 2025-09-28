"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"

export function MissionVision() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Mission, Vision & Purpose</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                        Guided by our core principles, we strive to make a positive impact through exceptional construction and
                        maintenance services.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Mission */}
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50">
                        <CardHeader className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                                <Target className="w-8 h-8 text-primary" />
                            </div>
                            <CardTitle className="text-2xl text-primary">Our Mission</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-muted-foreground leading-relaxed">
                                To deliver exceptional construction and maintenance services that exceed client expectations while
                                maintaining the highest standards of quality, safety, and professionalism. We are committed to building
                                lasting relationships through reliable service and innovative solutions.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Vision */}
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50">
                        <CardHeader className="text-center">
                            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                                <Eye className="w-8 h-8 text-secondary" />
                            </div>
                            <CardTitle className="text-2xl text-secondary">Our Vision</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-muted-foreground leading-relaxed">
                                To be the leading construction and maintenance company in Ghana and beyond, recognized for our
                                expertise, innovation, and commitment to excellence. We envision a future where every project we
                                undertake contributes to building stronger, more sustainable communities.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Purpose */}
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50">
                        <CardHeader className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                                <Heart className="w-8 h-8 text-primary" />
                            </div>
                            <CardTitle className="text-2xl text-primary">Our Purpose</CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-muted-foreground leading-relaxed">
                                We exist to solve construction and maintenance challenges with integrity, expertise, and care. Our
                                purpose is to protect and enhance the built environment while creating value for our clients, employees,
                                and communities through sustainable and responsible business practices.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
