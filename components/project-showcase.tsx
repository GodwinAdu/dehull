"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Industrial Facility Waterproofing",
        category: "Waterproofing",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&crop=center",
        description: "Complete waterproofing solution for a 50,000 sq ft industrial facility",
        tags: ["Waterproofing", "Industrial", "Large Scale"],
    },
    {
        id: 2,
        title: "Swimming Pool Restoration",
        category: "Pool Repairs",
        image: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN3aW1taW5nJTIwcG9vbHxlbnwwfHwwfHx8MA%3D%3D",
        description: "Full restoration of commercial swimming pool with modern finishes",
        tags: ["Pool Repair", "Restoration", "Commercial"],
    },
    {
        id: 3,
        title: "Office Building Painting",
        category: "Painting",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=600&fit=crop&crop=center",
        description: "Complete exterior and interior painting of 10-story office building",
        tags: ["Painting", "Commercial", "High-rise"],
    },
]

export function ProjectShowcase() {
    const [activeProject, setActiveProject] = useState(0)

    return (
        <section className="py-20 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">Featured Projects</h2>
                    <p className="text-xl text-muted-foreground animate-fade-in-up animation-delay-200">
                        Showcasing our expertise across various construction and maintenance projects
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Project Images */}
                    <div className="relative">
                        <div className="relative h-96 rounded-3xl overflow-hidden group">
                            <Image
                                src={projects[activeProject].image || "/placeholder.svg"}
                                alt={projects[activeProject].title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <span className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium mb-2">
                                    {projects[activeProject].category}
                                </span>
                                <h3 className="text-2xl font-bold">{projects[activeProject].title}</h3>
                            </div>
                        </div>

                        {/* Project Navigation */}
                        <div className="flex justify-center mt-6 gap-2">
                            {projects.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveProject(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeProject ? "bg-primary scale-125" : "bg-muted-foreground/30"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-8">
                        <div className="animate-fade-in-left">
                            <h3 className="text-3xl font-bold text-foreground mb-4">{projects[activeProject].title}</h3>
                            <p className="text-lg text-muted-foreground mb-6">{projects[activeProject].description}</p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {projects[activeProject].tags.map((tag) => (
                                    <span key={tag} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <Button className="group">
                                    View Project Details
                                    <ExternalLink className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                                </Button>
                                <Button variant="outline" className="group bg-transparent">
                                    More Projects
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
