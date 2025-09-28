"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Shield, Award } from "lucide-react"

export function ContactInfo() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact Information</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                        Multiple ways to reach us. Choose the method that works best for you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Details */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Phone className="w-5 h-5 text-primary" />
                                    Phone Numbers
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium">Primary Line</div>
                                        <div className="text-2xl font-bold text-primary">027 054 4044</div>
                                    </div>
                                    <Badge variant="secondary">24/7 Emergency</Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-medium">Secondary Line</div>
                                        <div className="text-2xl font-bold text-primary">024 388 1733</div>
                                    </div>
                                    <Badge variant="outline">Business Hours</Badge>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Mail className="w-5 h-5 text-primary" />
                                    Email Addresses
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <div className="font-medium text-muted-foreground">General Inquiries</div>
                                    <div className="text-lg font-medium text-primary">dehullconstruct@gmail.com</div>
                                </div>
                                <div>
                                    <div className="font-medium text-muted-foreground">Operations Manager</div>
                                    <div className="text-lg font-medium text-primary">dinahokyere201@gmail.com</div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-primary" />
                                    Service Areas
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="font-medium">Primary Service Area</span>
                                        <Badge variant="secondary">Ghana</Badge>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-medium">Extended Coverage</span>
                                        <Badge variant="outline">Surrounding Areas</Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-4">
                                        We provide services throughout Ghana and can extend to neighboring regions for larger projects.
                                        Contact us to confirm service availability in your area.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Business Hours & Additional Info */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-primary" />
                                    Business Hours
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <div className="font-medium">Monday - Friday</div>
                                        <div className="text-primary font-semibold">8:00 AM - 6:00 PM</div>
                                    </div>
                                    <div>
                                        <div className="font-medium">Saturday</div>
                                        <div className="text-primary font-semibold">9:00 AM - 4:00 PM</div>
                                    </div>
                                    <div>
                                        <div className="font-medium">Sunday</div>
                                        <div className="text-muted-foreground">Emergency Only</div>
                                    </div>
                                    <div>
                                        <div className="font-medium">Emergency</div>
                                        <div className="text-secondary font-semibold">24/7 Available</div>
                                    </div>
                                </div>
                                <div className="bg-muted/50 rounded-lg p-4 mt-4">
                                    <p className="text-sm text-muted-foreground">
                                        <strong>Note:</strong> We offer 24/7 emergency services for urgent construction and maintenance
                                        issues. Emergency response typically within 2-4 hours.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-primary" />
                                    Why Choose Us
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 gap-3">
                                    <div className="flex items-center space-x-3">
                                        <Award className="w-5 h-5 text-secondary" />
                                        <span className="text-sm">Licensed & Insured Professionals</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Award className="w-5 h-5 text-secondary" />
                                        <span className="text-sm">15+ Years of Experience</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Award className="w-5 h-5 text-secondary" />
                                        <span className="text-sm">500+ Successful Projects</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Award className="w-5 h-5 text-secondary" />
                                        <span className="text-sm">100% Customer Satisfaction</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Award className="w-5 h-5 text-secondary" />
                                        <span className="text-sm">Free Consultations & Quotes</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Award className="w-5 h-5 text-secondary" />
                                        <span className="text-sm">Comprehensive Warranties</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-primary text-primary-foreground">
                            <CardContent className="p-6 text-center">
                                <h3 className="text-xl font-semibold mb-2">Ready to Get Started?</h3>
                                <p className="text-primary-foreground/90 mb-4">
                                    Contact us today for a free consultation and detailed quote for your project.
                                </p>
                                <div className="text-2xl font-bold text-secondary">027 054 4044</div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
