"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Droplets,
    Paintbrush,
    Waves,
    Home,
    Shield,
    Building,
    Zap,
    ArrowRight,
    CheckCircle,
    Clock,
    Award,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
    {
        icon: Droplets,
        title: "Treatment of Rising Dampness",
        description:
            "Professional damp proofing solutions to protect your property from moisture damage and structural issues.",
        longDescription:
            "Our comprehensive dampness treatment service addresses the root causes of moisture problems in buildings. We use advanced diagnostic techniques to identify problem areas and implement effective solutions that provide long-lasting protection.",
        features: [
            "Comprehensive moisture assessment and diagnosis",
            "Chemical damp proof course injection",
            "Physical membrane installation",
            "Structural drying and dehumidification",
            "Preventive maintenance programs",
        ],
        benefits: [
            "Prevents structural damage",
            "Improves indoor air quality",
            "Reduces health risks",
            "Increases property value",
        ],
        duration: "2-5 days",
        warranty: "10 years",
        slug: "dampness-treatment",
        image: "/damp-treatment-construction-work.jpg",
    },
    {
        icon: Zap,
        title: "Industrial Cleaning",
        description: "Comprehensive cleaning services for industrial facilities, equipment, and commercial spaces.",
        longDescription:
            "Specialized industrial cleaning services designed to maintain operational efficiency and safety standards. Our team uses professional-grade equipment and eco-friendly cleaning solutions to deliver exceptional results.",
        features: [
            "Heavy machinery and equipment cleaning",
            "Facility deep cleaning and maintenance",
            "Safety compliance and documentation",
            "Scheduled maintenance programs",
            "Emergency cleaning services",
        ],
        benefits: [
            "Improved operational efficiency",
            "Enhanced safety standards",
            "Extended equipment lifespan",
            "Regulatory compliance",
        ],
        duration: "1-3 days",
        warranty: "6 months",
        slug: "industrial-cleaning",
        image: "/industrial-cleaning-equipment-machinery.jpg",
    },
    {
        icon: Paintbrush,
        title: "Professional Painting Services",
        description: "Expert interior and exterior painting for residential and commercial properties.",
        longDescription:
            "Transform your property with our professional painting services. We use premium quality paints and materials, combined with expert application techniques to deliver stunning, long-lasting results.",
        features: [
            "Surface preparation and priming",
            "Premium quality paint materials",
            "Expert color consultation",
            "Interior and exterior painting",
            "Protective coating applications",
        ],
        benefits: ["Enhanced property appearance", "Weather protection", "Increased property value", "Long-lasting finish"],
        duration: "3-7 days",
        warranty: "5 years",
        slug: "painting-services",
        image: "/professional-painting-service-building-exterior.jpg",
    },
    {
        icon: Waves,
        title: "Swimming Pool Repairs",
        description: "Complete pool maintenance, repair, and renovation services to keep your pool in perfect condition.",
        longDescription:
            "Keep your swimming pool in pristine condition with our comprehensive repair and maintenance services. From leak detection to complete renovations, we ensure your pool remains safe and enjoyable.",
        features: [
            "Leak detection and repair",
            "Pool surface restoration",
            "Equipment servicing and replacement",
            "Water quality management",
            "Pool renovation and upgrades",
        ],
        benefits: ["Extended pool lifespan", "Improved water quality", "Enhanced safety", "Reduced maintenance costs"],
        duration: "2-10 days",
        warranty: "3 years",
        slug: "pool-repairs",
        image: "/swimming-pool-repair-maintenance-blue-water.jpg",
    },
    {
        icon: Shield,
        title: "Roof Leakage Repair",
        description: "Expert roof repair and waterproofing services to protect your property from water damage.",
        longDescription:
            "Protect your property with our comprehensive roof repair services. We identify and fix leaks quickly, preventing costly water damage and ensuring your roof provides reliable protection for years to come.",
        features: [
            "Comprehensive leak detection",
            "Structural damage assessment",
            "Emergency repair services",
            "Preventive maintenance programs",
            "Roof replacement consultation",
        ],
        benefits: [
            "Prevents water damage",
            "Protects structural integrity",
            "Reduces energy costs",
            "Extends roof lifespan",
        ],
        duration: "1-5 days",
        warranty: "7 years",
        slug: "roof-repairs",
        image: "/roof-repair-construction-worker-fixing-tiles.jpg",
    },
    {
        icon: Home,
        title: "Tie Hole & Honey Comb Repairs",
        description: "Specialized concrete repair services for structural integrity and aesthetic improvement.",
        longDescription:
            "Restore the structural integrity and appearance of your concrete structures with our specialized repair services. We address tie holes, honey combing, and other concrete defects with precision and expertise.",
        features: [
            "Structural integrity assessment",
            "Concrete restoration and patching",
            "Surface finishing and smoothing",
            "Reinforcement installation",
            "Protective coating application",
        ],
        benefits: [
            "Restored structural integrity",
            "Improved appearance",
            "Prevented further deterioration",
            "Enhanced durability",
        ],
        duration: "2-7 days",
        warranty: "5 years",
        slug: "concrete-repairs",
        image: "/concrete-repair-construction-tie-holes-honeycomb.jpg",
    },
    {
        icon: Shield,
        title: "Fibre Coatings",
        description: "Advanced protective coatings for enhanced durability and weather resistance.",
        longDescription:
            "Protect and enhance your surfaces with our advanced fibre coating systems. These high-performance coatings provide superior protection against weather, chemicals, and wear while improving appearance.",
        features: [
            "Surface preparation and cleaning",
            "Advanced fibre coating application",
            "Weather resistance enhancement",
            "Chemical protection systems",
            "Decorative finish options",
        ],
        benefits: [
            "Superior weather protection",
            "Enhanced durability",
            "Improved appearance",
            "Reduced maintenance needs",
        ],
        duration: "2-4 days",
        warranty: "8 years",
        slug: "fibre-coatings",
        image: "/fibre-coating-application-protective-surface-treat.jpg",
    },
    {
        icon: Building,
        title: "General Construction",
        description: "Comprehensive construction services for residential and commercial projects.",
        longDescription:
            "From small renovations to major construction projects, we deliver quality results on time and within budget. Our experienced team handles all aspects of construction with attention to detail and commitment to excellence.",
        features: [
            "Project planning and management",
            "Quality construction services",
            "Material sourcing and procurement",
            "Safety compliance and monitoring",
            "Timely project delivery",
        ],
        benefits: [
            "Professional project management",
            "Quality craftsmanship",
            "Timely completion",
            "Cost-effective solutions",
        ],
        duration: "1-12 weeks",
        warranty: "2 years",
        slug: "general-construction",
        image: "/general-construction-building-site-workers.jpg",
    },
    {
        icon: Droplets,
        title: "Waterproofing Treatment",
        description: "Complete waterproofing solutions for tanks, basements, lift chambers, and more.",
        longDescription:
            "Comprehensive waterproofing solutions to protect your structures from water damage. We specialize in basement waterproofing, tank sealing, and structural protection using the latest materials and techniques.",
        features: [
            "Basement waterproofing systems",
            "Tank and reservoir sealing",
            "Lift chamber protection",
            "Foundation waterproofing",
            "Drainage system installation",
        ],
        benefits: [
            "Complete water protection",
            "Prevents structural damage",
            "Improves indoor environment",
            "Long-lasting solutions",
        ],
        duration: "3-10 days",
        warranty: "10 years",
        slug: "waterproofing",
        image: "/waterproofing-basement-tank-sealing-construction.jpg",
    },
]

export function ServicesGrid() {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Complete Service Portfolio</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                        Professional solutions for all your construction and maintenance needs, delivered with expertise and
                        attention to detail.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <Card
                                key={service.slug}
                                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={service.image || "/placeholder.svg"}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
                                    <div className="absolute top-4 left-4">
                                        <div className="w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-primary-foreground" />
                                        </div>
                                    </div>
                                    <div className="absolute top-4 right-4 flex gap-2">
                                        <Badge variant="secondary" className="bg-secondary/90 backdrop-blur-sm">
                                            <Clock className="w-3 h-3 mr-1" />
                                            {service.duration}
                                        </Badge>
                                        <Badge variant="outline" className="bg-background/90 backdrop-blur-sm">
                                            <Award className="w-3 h-3 mr-1" />
                                            {service.warranty}
                                        </Badge>
                                    </div>
                                </div>

                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {service.title}
                                    </CardTitle>
                                    <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                                </CardHeader>

                                <CardContent className="space-y-6">
                                    <p className="text-sm text-muted-foreground leading-relaxed">{service.longDescription}</p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-semibold text-sm text-foreground mb-2">Key Features:</h4>
                                            <ul className="space-y-1">
                                                {service.features.slice(0, 3).map((feature) => (
                                                    <li key={feature} className="flex items-start text-xs text-muted-foreground">
                                                        <CheckCircle className="w-3 h-3 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-sm text-foreground mb-2">Benefits:</h4>
                                            <ul className="space-y-1">
                                                {service.benefits.slice(0, 3).map((benefit) => (
                                                    <li key={benefit} className="flex items-start text-xs text-muted-foreground">
                                                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 mt-1.5 flex-shrink-0" />
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 pt-4">
                                        <Link href={`/services/${service.slug}`} className="flex-1">
                                            <Button
                                                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                                                variant="outline"
                                            >
                                                Learn More
                                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </Link>
                                        <Button size="sm" variant="secondary">
                                            Get Quote
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
