"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, ArrowRight, DollarSign, Clock, Users } from "lucide-react"
import Image from "next/image"
import type { Service } from "@/lib/services-data"

interface ServiceDetailContentProps {
    service: Service
}

export function ServiceDetailContent({ service }: ServiceDetailContentProps) {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Tabs defaultValue="overview" className="space-y-8">
                    <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="process">Process</TabsTrigger>
                        <TabsTrigger value="gallery">Gallery</TabsTrigger>
                        <TabsTrigger value="faq">FAQ</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-8">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-2xl">Service Overview</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <p className="text-muted-foreground leading-relaxed">{service.detailedDescription}</p>

                                        <div>
                                            <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {service.features.map((feature, index) => (
                                                    <div key={index} className="flex items-start space-x-3">
                                                        <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                                                        <span className="text-sm text-muted-foreground">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold mb-4">Benefits</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {service.benefits.map((benefit, index) => (
                                                    <div key={index} className="flex items-start space-x-3">
                                                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                                                        <span className="text-sm text-muted-foreground">{benefit}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center">
                                            <DollarSign className="w-5 h-5 mr-2 text-secondary" />
                                            Pricing Information
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="text-2xl font-bold text-primary">{service.pricing.starting}</div>
                                        <p className="text-sm text-muted-foreground">Pricing depends on:</p>
                                        <ul className="space-y-2">
                                            {service.pricing.factors.map((factor, index) => (
                                                <li key={index} className="flex items-center text-sm text-muted-foreground">
                                                    <ArrowRight className="w-3 h-3 mr-2 text-secondary" />
                                                    {factor}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center">
                                            <Clock className="w-5 h-5 mr-2 text-secondary" />
                                            Project Details
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-muted-foreground">Duration:</span>
                                            <Badge variant="outline">{service.duration}</Badge>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-muted-foreground">Warranty:</span>
                                            <Badge variant="secondary">{service.warranty}</Badge>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-muted-foreground">Team Size:</span>
                                            <div className="flex items-center">
                                                <Users className="w-4 h-4 mr-1 text-secondary" />
                                                <span className="text-sm">2-4 specialists</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="process" className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">Our Process</CardTitle>
                                <p className="text-muted-foreground">
                                    We follow a systematic approach to ensure quality results and customer satisfaction.
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-8">
                                    {service.process.map((step, index) => (
                                        <div key={index} className="flex gap-6">
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                                                    {step.step}
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                                                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="gallery" className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">Project Gallery</CardTitle>
                                <p className="text-muted-foreground">See examples of our work and the quality we deliver.</p>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {service.gallery.map((image, index) => (
                                        <div key={index} className="relative h-64 rounded-lg overflow-hidden group">
                                            <Image
                                                src={image || "/placeholder.svg"}
                                                alt={`${service.title} example ${index + 1}`}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="faq" className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
                                <p className="text-muted-foreground">
                                    Common questions about our {service.title.toLowerCase()} service.
                                </p>
                            </CardHeader>
                            <CardContent>
                                <Accordion type="single" collapsible className="w-full">
                                    {service.faqs.map((faq, index) => (
                                        <AccordionItem key={index} value={`item-${index}`}>
                                            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}
