export interface Service {
    icon: string
    title: string
    description: string
    longDescription: string
    detailedDescription: string
    features: string[]
    benefits: string[]
    process: { step: number; title: string; description: string }[]
    duration: string
    warranty: string
    slug: string
    image: string
    gallery: string[]
    faqs: { question: string; answer: string }[]
    pricing: {
        starting: string
        factors: string[]
    }
}

export const servicesData: Service[] = [
    {
        icon: "Droplets",
        title: "Treatment of Rising Dampness",
        description:
            "Professional damp proofing solutions to protect your property from moisture damage and structural issues.",
        longDescription:
            "Our comprehensive dampness treatment service addresses the root causes of moisture problems in buildings. We use advanced diagnostic techniques to identify problem areas and implement effective solutions that provide long-lasting protection.",
        detailedDescription:
            "Rising dampness is a serious issue that can cause significant structural damage and health problems if left untreated. Our expert team uses state-of-the-art moisture detection equipment to accurately diagnose the extent of the problem. We then implement targeted solutions including chemical damp proof courses, physical barriers, and advanced drying systems. Our approach not only treats existing dampness but also prevents future moisture problems, ensuring your property remains dry and healthy for years to come.",
        features: [
            "Comprehensive moisture assessment and diagnosis",
            "Chemical damp proof course injection",
            "Physical membrane installation",
            "Structural drying and dehumidification",
            "Preventive maintenance programs",
            "Advanced moisture detection equipment",
            "Eco-friendly treatment solutions",
            "Post-treatment monitoring",
        ],
        benefits: [
            "Prevents structural damage and deterioration",
            "Improves indoor air quality and health",
            "Reduces health risks from mold and mildew",
            "Increases property value and marketability",
            "Eliminates musty odors and dampness",
            "Protects furnishings and belongings",
        ],
        process: [
            {
                step: 1,
                title: "Initial Assessment",
                description: "Comprehensive moisture survey using advanced detection equipment to identify problem areas.",
            },
            {
                step: 2,
                title: "Diagnosis & Planning",
                description: "Detailed analysis of moisture sources and development of customized treatment plan.",
            },
            {
                step: 3,
                title: "Treatment Implementation",
                description:
                    "Professional application of damp proofing solutions including injection and membrane installation.",
            },
            {
                step: 4,
                title: "Drying & Monitoring",
                description: "Controlled drying process with ongoing monitoring to ensure complete moisture elimination.",
            },
            {
                step: 5,
                title: "Final Inspection",
                description:
                    "Thorough inspection and testing to confirm successful treatment and provide maintenance guidance.",
            },
        ],
        duration: "2-5 days",
        warranty: "10 years",
        slug: "dampness-treatment",
        image: "/damp-treatment-construction-work.jpg",
        gallery: [
            "/damp-treatment-before-after-1.jpg",
            "/damp-treatment-injection-process.jpg",
            "/damp-treatment-membrane-installation.jpg",
            "/damp-treatment-final-result.jpg",
        ],
        faqs: [
            {
                question: "How do I know if I have rising dampness?",
                answer:
                    "Signs include tide marks on walls, peeling paint or wallpaper, musty odors, and visible moisture on lower walls. Our free assessment can confirm the presence and extent of dampness.",
            },
            {
                question: "How long does the treatment take?",
                answer:
                    "Most treatments take 2-5 days depending on the severity and size of the affected area. We'll provide a detailed timeline during our initial assessment.",
            },
            {
                question: "Is the treatment guaranteed?",
                answer:
                    "Yes, we provide a comprehensive 10-year warranty on all dampness treatment work, giving you complete peace of mind.",
            },
        ],
        pricing: {
            starting: "From $1,500",
            factors: ["Size of affected area", "Severity of dampness", "Type of treatment required", "Accessibility"],
        },
    },
    {
        icon: "Zap",
        title: "Industrial Cleaning",
        description: "Comprehensive cleaning services for industrial facilities, equipment, and commercial spaces.",
        longDescription:
            "Specialized industrial cleaning services designed to maintain operational efficiency and safety standards. Our team uses professional-grade equipment and eco-friendly cleaning solutions to deliver exceptional results.",
        detailedDescription:
            "Industrial facilities require specialized cleaning approaches that go beyond standard commercial cleaning. Our experienced team understands the unique challenges of industrial environments, from heavy machinery cleaning to hazardous material handling. We use advanced cleaning technologies, including high-pressure systems, specialized solvents, and eco-friendly solutions to ensure your facility meets the highest standards of cleanliness and safety. Our services help maintain equipment efficiency, ensure regulatory compliance, and create a safer working environment for your employees.",
        features: [
            "Heavy machinery and equipment cleaning",
            "Facility deep cleaning and maintenance",
            "Safety compliance and documentation",
            "Scheduled maintenance programs",
            "Emergency cleaning services",
            "Hazardous material handling",
            "High-pressure cleaning systems",
            "Eco-friendly cleaning solutions",
        ],
        benefits: [
            "Improved operational efficiency",
            "Enhanced safety standards",
            "Extended equipment lifespan",
            "Regulatory compliance assurance",
            "Reduced downtime and maintenance costs",
            "Improved workplace environment",
        ],
        process: [
            {
                step: 1,
                title: "Site Assessment",
                description: "Comprehensive evaluation of facility cleaning requirements and safety considerations.",
            },
            {
                step: 2,
                title: "Safety Planning",
                description: "Development of detailed safety protocols and compliance procedures for the cleaning process.",
            },
            {
                step: 3,
                title: "Equipment Preparation",
                description: "Setup of specialized cleaning equipment and preparation of eco-friendly cleaning solutions.",
            },
            {
                step: 4,
                title: "Cleaning Execution",
                description: "Systematic cleaning of equipment and facilities following established safety protocols.",
            },
            {
                step: 5,
                title: "Quality Verification",
                description: "Thorough inspection and documentation to ensure all cleaning standards are met.",
            },
        ],
        duration: "1-3 days",
        warranty: "6 months",
        slug: "industrial-cleaning",
        image: "/industrial-cleaning-equipment-machinery.jpg",
        gallery: [
            "/industrial-cleaning-before-after.jpg",
            "/industrial-cleaning-equipment-detail.jpg",
            "/industrial-cleaning-safety-gear.jpg",
            "/industrial-cleaning-final-result.jpg",
        ],
        faqs: [
            {
                question: "Do you handle hazardous materials?",
                answer:
                    "Yes, our team is trained and certified to handle various hazardous materials safely, following all regulatory requirements and safety protocols.",
            },
            {
                question: "Can you work around our production schedule?",
                answer:
                    "Absolutely. We offer flexible scheduling including nights, weekends, and planned shutdowns to minimize disruption to your operations.",
            },
            {
                question: "What safety certifications do you have?",
                answer:
                    "Our team holds all necessary safety certifications and we maintain comprehensive insurance coverage for industrial cleaning operations.",
            },
        ],
        pricing: {
            starting: "From $2,000",
            factors: ["Facility size", "Equipment complexity", "Safety requirements", "Frequency of service"],
        },
    },
    {
        icon: "Paintbrush",
        title: "Professional Painting Services",
        description: "Expert interior and exterior painting for residential and commercial properties.",
        longDescription:
            "Transform your property with our professional painting services. We use premium quality paints and materials, combined with expert application techniques to deliver stunning, long-lasting results.",
        detailedDescription:
            "A fresh coat of paint can completely transform any space, but achieving professional results requires expertise, quality materials, and attention to detail. Our painting specialists bring years of experience to every project, from surface preparation to final finishing touches. We use only premium paints and materials, ensuring durability and beautiful results that last. Whether you need interior painting to refresh your living spaces or exterior painting to protect and enhance your property's curb appeal, we deliver exceptional craftsmanship that exceeds expectations.",
        features: [
            "Surface preparation and priming",
            "Premium quality paint materials",
            "Expert color consultation",
            "Interior and exterior painting",
            "Protective coating applications",
            "Texture and decorative finishes",
            "Eco-friendly paint options",
            "Complete cleanup service",
        ],
        benefits: [
            "Enhanced property appearance and curb appeal",
            "Weather protection and durability",
            "Increased property value",
            "Long-lasting, professional finish",
            "Improved indoor air quality with low-VOC paints",
            "Protection against wear and damage",
        ],
        process: [
            {
                step: 1,
                title: "Consultation & Planning",
                description: "Color consultation and detailed project planning including material selection and timeline.",
            },
            {
                step: 2,
                title: "Surface Preparation",
                description: "Thorough cleaning, sanding, and priming of all surfaces to ensure optimal paint adhesion.",
            },
            {
                step: 3,
                title: "Protection Setup",
                description: "Careful protection of furniture, flooring, and landscaping to prevent paint damage.",
            },
            {
                step: 4,
                title: "Paint Application",
                description: "Professional application using appropriate techniques for each surface and paint type.",
            },
            {
                step: 5,
                title: "Final Inspection",
                description: "Detailed quality check and touch-ups followed by complete cleanup and project walkthrough.",
            },
        ],
        duration: "3-7 days",
        warranty: "5 years",
        slug: "painting-services",
        image: "/professional-painting-service-building-exterior.jpg",
        gallery: [
            "/painting-interior-before-after.jpg",
            "/painting-exterior-transformation.jpg",
            "/painting-color-consultation.jpg",
            "/painting-final-details.jpg",
        ],
        faqs: [
            {
                question: "Do you provide color consultation?",
                answer:
                    "Yes, our experts provide professional color consultation to help you choose the perfect colors that complement your space and personal style.",
            },
            {
                question: "What type of paint do you use?",
                answer:
                    "We use only premium quality paints from leading manufacturers, including eco-friendly low-VOC options for healthier indoor environments.",
            },
            {
                question: "How do you protect my furniture and belongings?",
                answer:
                    "We carefully cover and protect all furniture, flooring, and belongings with professional-grade drop cloths and plastic sheeting.",
            },
        ],
        pricing: {
            starting: "From $1,200",
            factors: ["Square footage", "Surface condition", "Paint quality", "Number of colors"],
        },
    },
    // Add more services here following the same pattern...
]

export function getAllServices(): Service[] {
    return servicesData
}

export function getServiceBySlug(slug: string): Service | undefined {
    return servicesData.find((service) => service.slug === slug)
}

export function getRelatedServices(currentSlug: string, limit = 3): Service[] {
    return servicesData.filter((service) => service.slug !== currentSlug).slice(0, limit)
}
