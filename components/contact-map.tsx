"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Navigation } from "lucide-react"

export function ContactMap() {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Service Coverage</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                        We proudly serve clients throughout Ghana and surrounding regions with professional construction and
                        maintenance services.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Map Placeholder */}
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-primary" />
                                    Service Coverage Map
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="relative h-96 bg-muted/30 rounded-lg flex items-center justify-center">
                                    <div className="text-center">
                                        <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                                        <h3 className="text-xl font-semibold text-foreground mb-2">Ghana & Surrounding Areas</h3>
                                        <p className="text-muted-foreground">
                                            Interactive map showing our service coverage area would be displayed here
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Service Areas */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Navigation className="w-5 h-5 text-primary" />
                                    Primary Service Areas
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="font-medium">Accra Region</span>
                                        <span className="text-secondary text-sm">✓ Full Coverage</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-medium">Greater Accra</span>
                                        <span className="text-secondary text-sm">✓ Full Coverage</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-medium">Tema</span>
                                        <span className="text-secondary text-sm">✓ Full Coverage</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-medium">Kumasi</span>
                                        <span className="text-secondary text-sm">✓ Available</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-medium">Cape Coast</span>
                                        <span className="text-secondary text-sm">✓ Available</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-medium">Takoradi</span>
                                        <span className="text-secondary text-sm">✓ Available</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Extended Coverage</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                    We also provide services to other regions in Ghana and can extend to neighboring countries for larger
                                    commercial and industrial projects.
                                </p>
                                <div className="bg-muted/50 rounded-lg p-4">
                                    <p className="text-sm font-medium text-foreground mb-2">Not sure if we serve your area?</p>
                                    <p className="text-sm text-muted-foreground">
                                        Contact us at <span className="font-medium text-primary">027 054 4044</span> to confirm service
                                        availability and discuss travel arrangements if needed.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
