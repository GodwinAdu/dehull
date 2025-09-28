"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, MessageSquare, Calculator, Calendar, Phone } from "lucide-react"

export function ContactForms() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        urgency: "",
        budget: "",
        propertyType: "",
        projectSize: "",
        timeline: "",
        address: "",
        preferredContact: "",
        newsletter: false,
    })

    const handleInputChange = (field: string, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = (e: React.FormEvent, formType: string) => {
        e.preventDefault()
        console.log(`${formType} form submitted:`, formData)
        // Handle form submission here
    }

    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How Can We Help You?</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                        Choose the option that best fits your needs. We'll respond within 24 hours with personalized assistance.
                    </p>
                </div>

                <Tabs defaultValue="quote" className="max-w-4xl mx-auto">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="quote" className="flex items-center gap-2">
                            <Calculator className="w-4 h-4" />
                            <span className="hidden sm:inline">Quote</span>
                        </TabsTrigger>
                        <TabsTrigger value="consultation" className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span className="hidden sm:inline">Consultation</span>
                        </TabsTrigger>
                        <TabsTrigger value="emergency" className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            <span className="hidden sm:inline">Emergency</span>
                        </TabsTrigger>
                        <TabsTrigger value="general" className="flex items-center gap-2">
                            <MessageSquare className="w-4 h-4" />
                            <span className="hidden sm:inline">General</span>
                        </TabsTrigger>
                    </TabsList>

                    {/* Quote Request Form */}
                    <TabsContent value="quote">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Calculator className="w-5 h-5 text-primary" />
                                    Request a Quote
                                </CardTitle>
                                <CardDescription>
                                    Get a detailed quote for your project. Please provide as much information as possible for an accurate
                                    estimate.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={(e) => handleSubmit(e, "quote")} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Full Name *</Label>
                                            <Input
                                                id="name"
                                                placeholder="Your full name"
                                                value={formData.name}
                                                onChange={(e) => handleInputChange("name", e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email Address *</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="your.email@example.com"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange("email", e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone Number *</Label>
                                            <Input
                                                id="phone"
                                                placeholder="Your phone number"
                                                value={formData.phone}
                                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="service">Service Needed *</Label>
                                            <Select onValueChange={(value) => handleInputChange("service", value)}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a service" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="dampness-treatment">Treatment of Rising Dampness</SelectItem>
                                                    <SelectItem value="industrial-cleaning">Industrial Cleaning</SelectItem>
                                                    <SelectItem value="painting">Painting Services</SelectItem>
                                                    <SelectItem value="pool-repairs">Swimming Pool Repairs</SelectItem>
                                                    <SelectItem value="roof-repairs">Roof Leakage Repair</SelectItem>
                                                    <SelectItem value="concrete-repairs">Tie Hole & Honey Comb Repairs</SelectItem>
                                                    <SelectItem value="fibre-coatings">Fibre Coatings</SelectItem>
                                                    <SelectItem value="general-construction">General Construction</SelectItem>
                                                    <SelectItem value="waterproofing">Waterproofing Treatment</SelectItem>
                                                    <SelectItem value="multiple">Multiple Services</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="propertyType">Property Type</Label>
                                            <Select onValueChange={(value) => handleInputChange("propertyType", value)}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="residential">Residential</SelectItem>
                                                    <SelectItem value="commercial">Commercial</SelectItem>
                                                    <SelectItem value="industrial">Industrial</SelectItem>
                                                    <SelectItem value="institutional">Institutional</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="projectSize">Project Size</Label>
                                            <Select onValueChange={(value) => handleInputChange("projectSize", value)}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select size" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="small">Small (Under $5,000)</SelectItem>
                                                    <SelectItem value="medium">Medium ($5,000 - $20,000)</SelectItem>
                                                    <SelectItem value="large">Large ($20,000 - $50,000)</SelectItem>
                                                    <SelectItem value="enterprise">Enterprise ($50,000+)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="timeline">Timeline</Label>
                                            <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="When needed" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="asap">ASAP</SelectItem>
                                                    <SelectItem value="1-2weeks">1-2 weeks</SelectItem>
                                                    <SelectItem value="1month">Within 1 month</SelectItem>
                                                    <SelectItem value="3months">Within 3 months</SelectItem>
                                                    <SelectItem value="flexible">Flexible</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="address">Property Address</Label>
                                        <Input
                                            id="address"
                                            placeholder="Full address of the property"
                                            value={formData.address}
                                            onChange={(e) => handleInputChange("address", e.target.value)}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Project Details *</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Please describe your project in detail, including any specific requirements, challenges, or questions you have..."
                                            className="min-h-[120px]"
                                            value={formData.message}
                                            onChange={(e) => handleInputChange("message", e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="newsletter"
                                            checked={formData.newsletter}
                                            onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                                        />
                                        <Label htmlFor="newsletter" className="text-sm">
                                            I'd like to receive updates about services and special offers
                                        </Label>
                                    </div>

                                    <Button type="submit" className="w-full group">
                                        <Calculator className="mr-2 w-4 h-4" />
                                        Request Detailed Quote
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Consultation Form */}
                    <TabsContent value="consultation">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-primary" />
                                    Schedule a Consultation
                                </CardTitle>
                                <CardDescription>
                                    Book a free consultation with our experts to discuss your project and get professional advice.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={(e) => handleSubmit(e, "consultation")} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="consult-name">Full Name *</Label>
                                            <Input id="consult-name" placeholder="Your full name" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="consult-email">Email Address *</Label>
                                            <Input id="consult-email" type="email" placeholder="your.email@example.com" required />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="consult-phone">Phone Number *</Label>
                                            <Input id="consult-phone" placeholder="Your phone number" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="preferred-contact">Preferred Contact Method</Label>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="How should we contact you?" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="phone">Phone Call</SelectItem>
                                                    <SelectItem value="email">Email</SelectItem>
                                                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                                                    <SelectItem value="site-visit">Site Visit</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="consult-service">Area of Interest</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="What service are you interested in?" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="dampness-treatment">Treatment of Rising Dampness</SelectItem>
                                                <SelectItem value="industrial-cleaning">Industrial Cleaning</SelectItem>
                                                <SelectItem value="painting">Painting Services</SelectItem>
                                                <SelectItem value="pool-repairs">Swimming Pool Repairs</SelectItem>
                                                <SelectItem value="roof-repairs">Roof Leakage Repair</SelectItem>
                                                <SelectItem value="concrete-repairs">Tie Hole & Honey Comb Repairs</SelectItem>
                                                <SelectItem value="fibre-coatings">Fibre Coatings</SelectItem>
                                                <SelectItem value="general-construction">General Construction</SelectItem>
                                                <SelectItem value="waterproofing">Waterproofing Treatment</SelectItem>
                                                <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="consult-message">Tell us about your project</Label>
                                        <Textarea
                                            id="consult-message"
                                            placeholder="Brief description of what you'd like to discuss during the consultation..."
                                            className="min-h-[100px]"
                                        />
                                    </div>

                                    <Button type="submit" className="w-full group">
                                        <Calendar className="mr-2 w-4 h-4" />
                                        Schedule Free Consultation
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Emergency Contact Form */}
                    <TabsContent value="emergency">
                        <Card className="border-destructive/50">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-destructive">
                                    <Phone className="w-5 h-5" />
                                    Emergency Service Request
                                </CardTitle>
                                <CardDescription>
                                    For urgent construction or maintenance emergencies. We provide 24/7 emergency response services.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6">
                                    <h3 className="font-semibold text-destructive mb-2">For Immediate Emergency Response:</h3>
                                    <div className="space-y-1 text-sm">
                                        <div>📞 Call: 027 054 4044 or 024 388 1733</div>
                                        <div>⏰ Available 24/7 for emergencies</div>
                                        <div>🚨 Average response time: 2-4 hours</div>
                                    </div>
                                </div>

                                <form onSubmit={(e) => handleSubmit(e, "emergency")} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="emergency-name">Full Name *</Label>
                                            <Input id="emergency-name" placeholder="Your full name" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="emergency-phone">Phone Number *</Label>
                                            <Input id="emergency-phone" placeholder="Your phone number" required />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="emergency-address">Emergency Location *</Label>
                                        <Input id="emergency-address" placeholder="Full address of emergency location" required />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="emergency-type">Type of Emergency *</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select emergency type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="water-damage">Water Damage/Flooding</SelectItem>
                                                <SelectItem value="roof-leak">Severe Roof Leak</SelectItem>
                                                <SelectItem value="structural-damage">Structural Damage</SelectItem>
                                                <SelectItem value="electrical-hazard">Electrical Hazard</SelectItem>
                                                <SelectItem value="gas-leak">Gas Leak</SelectItem>
                                                <SelectItem value="other">Other Emergency</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="emergency-description">Emergency Description *</Label>
                                        <Textarea
                                            id="emergency-description"
                                            placeholder="Describe the emergency situation in detail. Include any immediate dangers or safety concerns..."
                                            className="min-h-[120px]"
                                            required
                                        />
                                    </div>

                                    <Button type="submit" variant="destructive" className="w-full group">
                                        <Phone className="mr-2 w-4 h-4" />
                                        Submit Emergency Request
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* General Contact Form */}
                    <TabsContent value="general">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <MessageSquare className="w-5 h-5 text-primary" />
                                    General Inquiry
                                </CardTitle>
                                <CardDescription>
                                    Have questions about our services, need general information, or want to provide feedback? We'd love to
                                    hear from you.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={(e) => handleSubmit(e, "general")} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="general-name">Full Name *</Label>
                                            <Input id="general-name" placeholder="Your full name" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="general-email">Email Address *</Label>
                                            <Input id="general-email" type="email" placeholder="your.email@example.com" required />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="general-phone">Phone Number</Label>
                                            <Input id="general-phone" placeholder="Your phone number (optional)" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="inquiry-type">Inquiry Type</Label>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="What is this regarding?" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="services">Services Information</SelectItem>
                                                    <SelectItem value="pricing">Pricing Questions</SelectItem>
                                                    <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                                                    <SelectItem value="careers">Career Opportunities</SelectItem>
                                                    <SelectItem value="feedback">Feedback</SelectItem>
                                                    <SelectItem value="complaint">Complaint</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="general-message">Message *</Label>
                                        <Textarea
                                            id="general-message"
                                            placeholder="Please share your questions, comments, or feedback..."
                                            className="min-h-[120px]"
                                            required
                                        />
                                    </div>

                                    <Button type="submit" className="w-full group">
                                        <MessageSquare className="mr-2 w-4 h-4" />
                                        Send Message
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}
