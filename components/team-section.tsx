"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone } from "lucide-react"
import Image from "next/image"

const teamMembers = [
    {
        name: "Emmanuel Dehull",
        position: "Founder & CEO",
        image: "/team-member-ceo-construction-professional.jpg",
        bio: "With over 15 years of experience in construction and project management, Emmanuel leads our team with vision and expertise.",
        specialties: ["Project Management", "Strategic Planning", "Client Relations"],
        contact: {
            email: "dehullconstruct@gmail.com",
            phone: "027 054 4044",
        },
    },
    {
        name: "Diana Hokyere",
        position: "Operations Manager",
        image: "/team-member-operations-manager-professional.jpg",
        bio: "Diana ensures smooth operations and quality control across all our projects, bringing precision and attention to detail.",
        specialties: ["Operations Management", "Quality Control", "Team Coordination"],
        contact: {
            email: "dinahokyere201@gmail.com",
            phone: "024 388 1733",
        },
    },
    {
        name: "Technical Team",
        position: "Skilled Professionals",
        image: "/team-construction-workers-professionals.jpg",
        bio: "Our experienced team of technicians, engineers, and craftsmen bring specialized skills to every project.",
        specialties: ["Technical Expertise", "Safety Compliance", "Quality Craftsmanship"],
        contact: {
            email: "dehullconstruct@gmail.com",
            phone: "027 054 4044",
        },
    },
]

export function TeamSection() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                        The experienced professionals behind our success, dedicated to delivering exceptional results for every
                        project.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <Card
                            key={member.name}
                            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={member.image || "/placeholder.svg"}
                                    alt={member.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 text-primary-foreground">
                                    <h3 className="text-xl font-bold">{member.name}</h3>
                                    <p className="text-primary-foreground/90">{member.position}</p>
                                </div>
                            </div>

                            <CardContent className="p-6 space-y-4">
                                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>

                                <div>
                                    <h4 className="font-semibold text-sm text-foreground mb-2">Specialties:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {member.specialties.map((specialty) => (
                                            <Badge key={specialty} variant="outline" className="text-xs">
                                                {specialty}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-border/50">
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center space-x-2 text-muted-foreground">
                                            <Mail className="w-4 h-4" />
                                            <span className="truncate">{member.contact.email}</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-muted-foreground">
                                            <Phone className="w-4 h-4" />
                                            <span>{member.contact.phone}</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Card className="bg-primary text-primary-foreground inline-block">
                        <CardContent className="p-8">
                            <h3 className="text-xl font-semibold mb-4">Join Our Team</h3>
                            <p className="text-primary-foreground/90 mb-4">
                                We're always looking for talented professionals to join our growing team.
                            </p>
                            <div className="text-sm text-primary-foreground/80">
                                Send your resume to: <span className="font-medium">dehullconstruct@gmail.com</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
