"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Building, Award, Users, Target } from "lucide-react"

export function AboutStory() {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Story Content */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
                            <div className="space-y-6 text-muted-foreground leading-relaxed">
                                <p>
                                    Founded over 15 years ago, Dehull Zion Ventures began as a small construction company with a big
                                    vision: to provide exceptional construction and maintenance services that exceed client expectations.
                                    What started as a local operation has grown into a trusted name in the industry, serving clients
                                    across Ghana and beyond.
                                </p>
                                <p>
                                    Our journey has been marked by continuous growth, innovation, and an unwavering commitment to quality.
                                    From our humble beginnings handling small residential projects, we have expanded our expertise to
                                    include complex industrial cleaning, advanced waterproofing systems, and comprehensive construction
                                    solutions.
                                </p>
                                <p>
                                    Today, we are proud to be recognized as industry leaders, having completed over 500 successful
                                    projects while maintaining our core values of integrity, excellence, and customer satisfaction. Our
                                    team of skilled professionals continues to push the boundaries of what's possible in construction and
                                    maintenance services.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Achievement Cards */}
                    <div className="grid grid-cols-2 gap-6">
                        <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="pt-8 pb-6">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Building className="w-8 h-8 text-primary" />
                                </div>
                                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                                <div className="text-sm text-muted-foreground">Projects Completed</div>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="pt-8 pb-6">
                                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Award className="w-8 h-8 text-secondary" />
                                </div>
                                <div className="text-3xl font-bold text-secondary mb-2">15+</div>
                                <div className="text-sm text-muted-foreground">Years Experience</div>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="pt-8 pb-6">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-8 h-8 text-primary" />
                                </div>
                                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                            </CardContent>
                        </Card>

                        <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="pt-8 pb-6">
                                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Target className="w-8 h-8 text-secondary" />
                                </div>
                                <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                                <div className="text-sm text-muted-foreground">Support Available</div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
