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
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&crop=center",
        gallery: [
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop&crop=center",
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
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&crop=center",
        gallery: [
            "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop&crop=center",
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
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&h=600&fit=crop&crop=center",
        gallery: [
            "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop&crop=center",
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
    {
        icon: "Waves",
        title: "Swimming Pool Repairs",
        description: "Complete pool maintenance, repair, and renovation services to keep your pool in perfect condition.",
        longDescription:
            "Keep your swimming pool in pristine condition with our comprehensive repair and maintenance services. From leak detection to complete renovations, we ensure your pool remains safe and enjoyable.",
        detailedDescription:
            "Swimming pools require specialized maintenance and repair expertise to ensure safety, functionality, and longevity. Our experienced team provides comprehensive pool services, from routine maintenance to complex repairs and complete renovations. We use advanced diagnostic equipment to identify issues early and implement effective solutions that restore your pool to optimal condition.",
        features: [
            "Leak detection and repair",
            "Pool surface restoration",
            "Equipment servicing and replacement",
            "Water quality management",
            "Pool renovation and upgrades",
            "Filtration system maintenance",
            "Chemical balancing services",
            "Safety equipment installation",
        ],
        benefits: [
            "Extended pool lifespan",
            "Improved water quality",
            "Enhanced safety",
            "Reduced maintenance costs",
            "Increased property value",
            "Better swimming experience",
        ],
        process: [
            {
                step: 1,
                title: "Pool Inspection",
                description: "Comprehensive assessment of pool condition, equipment, and water quality.",
            },
            {
                step: 2,
                title: "Problem Diagnosis",
                description: "Detailed analysis of issues and development of repair strategy.",
            },
            {
                step: 3,
                title: "Repair Implementation",
                description: "Professional repair work using quality materials and proven techniques.",
            },
            {
                step: 4,
                title: "Testing & Balancing",
                description: "System testing and water chemistry balancing for optimal performance.",
            },
            {
                step: 5,
                title: "Final Inspection",
                description: "Quality assurance check and maintenance guidance for ongoing care.",
            },
        ],
        duration: "2-10 days",
        warranty: "3 years",
        slug: "pool-repairs",
        image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop&crop=center",
        gallery: [
            "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
        ],
        faqs: [
            {
                question: "How often should I service my pool?",
                answer: "Regular maintenance should be done weekly, with professional servicing recommended monthly during swimming season.",
            },
            {
                question: "Can you repair all types of pool surfaces?",
                answer: "Yes, we work with all pool surface types including concrete, fiberglass, vinyl, and tile.",
            },
            {
                question: "Do you provide emergency repair services?",
                answer: "Yes, we offer emergency repair services for urgent issues like major leaks or equipment failures.",
            },
        ],
        pricing: {
            starting: "From $800",
            factors: ["Pool size", "Type of repair", "Equipment replacement", "Surface condition"],
        },
    },
    {
        icon: "Shield",
        title: "Roof Leakage Repair",
        description: "Expert roof repair and waterproofing services to protect your property from water damage.",
        longDescription:
            "Protect your property with our comprehensive roof repair services. We identify and fix leaks quickly, preventing costly water damage and ensuring your roof provides reliable protection for years to come.",
        detailedDescription:
            "Roof leaks can cause extensive damage if not addressed promptly and properly. Our experienced roofing specialists use advanced detection methods to locate leaks and assess structural damage. We provide comprehensive repair solutions that not only fix immediate problems but also prevent future issues, ensuring your roof continues to protect your property effectively.",
        features: [
            "Comprehensive leak detection",
            "Structural damage assessment",
            "Emergency repair services",
            "Preventive maintenance programs",
            "Roof replacement consultation",
            "Gutter repair and maintenance",
            "Flashing installation and repair",
            "Weatherproofing treatments",
        ],
        benefits: [
            "Prevents water damage",
            "Protects structural integrity",
            "Reduces energy costs",
            "Extends roof lifespan",
            "Improves property value",
            "Enhances indoor comfort",
        ],
        process: [
            {
                step: 1,
                title: "Roof Inspection",
                description: "Thorough examination of roof condition and leak source identification.",
            },
            {
                step: 2,
                title: "Damage Assessment",
                description: "Evaluation of structural damage and repair requirements.",
            },
            {
                step: 3,
                title: "Repair Execution",
                description: "Professional repair work using quality materials and proven methods.",
            },
            {
                step: 4,
                title: "Waterproofing",
                description: "Application of protective coatings and sealants for long-term protection.",
            },
            {
                step: 5,
                title: "Quality Check",
                description: "Final inspection and testing to ensure complete leak resolution.",
            },
        ],
        duration: "1-5 days",
        warranty: "7 years",
        slug: "roof-repairs",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop&crop=center",
        gallery: [
            "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center",
        ],
        faqs: [
            {
                question: "How do I know if my roof needs repair?",
                answer: "Signs include water stains on ceilings, missing or damaged shingles, and visible leaks during rain.",
            },
            {
                question: "Can you work in all weather conditions?",
                answer: "We prioritize safety and may postpone work during severe weather, but we offer emergency services for urgent repairs.",
            },
            {
                question: "Do you provide warranties on roof repairs?",
                answer: "Yes, we provide a comprehensive 7-year warranty on all roof repair work.",
            },
        ],
        pricing: {
            starting: "From $600",
            factors: ["Roof size", "Damage extent", "Material type", "Accessibility"],
        },
    },
    {
        icon: "Home",
        title: "Tie Hole & Honey Comb Repairs",
        description: "Specialized concrete repair services for structural integrity and aesthetic improvement.",
        longDescription:
            "Restore the structural integrity and appearance of your concrete structures with our specialized repair services. We address tie holes, honey combing, and other concrete defects with precision and expertise.",
        detailedDescription:
            "Concrete structures often develop defects like tie holes and honey combing that compromise both appearance and structural integrity. Our specialized repair services address these issues using advanced materials and techniques. We ensure repairs blend seamlessly with existing concrete while restoring full structural strength and improving overall aesthetics.",
        features: [
            "Structural integrity assessment",
            "Concrete restoration and patching",
            "Surface finishing and smoothing",
            "Reinforcement installation",
            "Protective coating application",
            "Color matching services",
            "Texture restoration",
            "Crack injection repair",
        ],
        benefits: [
            "Restored structural integrity",
            "Improved appearance",
            "Prevented further deterioration",
            "Enhanced durability",
            "Increased property value",
            "Extended structure lifespan",
        ],
        process: [
            {
                step: 1,
                title: "Structural Assessment",
                description: "Comprehensive evaluation of concrete condition and defect analysis.",
            },
            {
                step: 2,
                title: "Repair Planning",
                description: "Development of repair strategy and material selection.",
            },
            {
                step: 3,
                title: "Surface Preparation",
                description: "Cleaning and preparation of concrete surfaces for optimal repair adhesion.",
            },
            {
                step: 4,
                title: "Repair Application",
                description: "Professional application of repair materials and reinforcement installation.",
            },
            {
                step: 5,
                title: "Finishing & Protection",
                description: "Surface finishing, color matching, and protective coating application.",
            },
        ],
        duration: "2-7 days",
        warranty: "5 years",
        slug: "concrete-repairs",
        image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop&crop=center",
        gallery: [
            "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop&crop=center",
        ],
        faqs: [
            {
                question: "What causes honey combing in concrete?",
                answer: "Honey combing occurs due to inadequate vibration during concrete placement, leading to air voids and weak spots.",
            },
            {
                question: "Can tie holes be permanently sealed?",
                answer: "Yes, we use specialized materials and techniques to permanently seal tie holes while maintaining structural integrity.",
            },
            {
                question: "Will repairs match the existing concrete color?",
                answer: "We use color-matching techniques to ensure repairs blend seamlessly with existing concrete surfaces.",
            },
        ],
        pricing: {
            starting: "From $400",
            factors: ["Repair area size", "Defect severity", "Access difficulty", "Finishing requirements"],
        },
    },
    {
        icon: "Shield",
        title: "Fibre Coatings",
        description: "Advanced protective coatings for enhanced durability and weather resistance.",
        longDescription:
            "Protect and enhance your surfaces with our advanced fibre coating systems. These high-performance coatings provide superior protection against weather, chemicals, and wear while improving appearance.",
        detailedDescription:
            "Fibre coatings represent the latest in protective surface technology, offering superior durability and weather resistance. Our advanced coating systems create a protective barrier that shields surfaces from environmental damage while enhancing appearance. These coatings are ideal for both residential and commercial applications where long-term protection is essential.",
        features: [
            "Surface preparation and cleaning",
            "Advanced fibre coating application",
            "Weather resistance enhancement",
            "Chemical protection systems",
            "Decorative finish options",
            "UV protection coating",
            "Anti-slip surface treatments",
            "Maintenance-free solutions",
        ],
        benefits: [
            "Superior weather protection",
            "Enhanced durability",
            "Improved appearance",
            "Reduced maintenance needs",
            "Chemical resistance",
            "Long-lasting performance",
        ],
        process: [
            {
                step: 1,
                title: "Surface Analysis",
                description: "Assessment of surface condition and coating system selection.",
            },
            {
                step: 2,
                title: "Surface Preparation",
                description: "Thorough cleaning and preparation for optimal coating adhesion.",
            },
            {
                step: 3,
                title: "Primer Application",
                description: "Application of specialized primer for enhanced coating performance.",
            },
            {
                step: 4,
                title: "Coating Application",
                description: "Professional application of fibre coating system in multiple layers.",
            },
            {
                step: 5,
                title: "Quality Assurance",
                description: "Final inspection and performance testing of completed coating system.",
            },
        ],
        duration: "2-4 days",
        warranty: "8 years",
        slug: "fibre-coatings",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop&crop=center",
        gallery: [
            "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&crop=center",
        ],
        faqs: [
            {
                question: "How long do fibre coatings last?",
                answer: "Our fibre coatings are designed to last 8+ years with minimal maintenance, depending on environmental conditions.",
            },
            {
                question: "Can fibre coatings be applied to any surface?",
                answer: "Fibre coatings can be applied to most surfaces including concrete, metal, and wood with proper preparation.",
            },
            {
                question: "Are fibre coatings environmentally friendly?",
                answer: "Yes, we use eco-friendly coating systems that are safe for the environment and human health.",
            },
        ],
        pricing: {
            starting: "From $15/sqm",
            factors: ["Surface area", "Surface condition", "Coating type", "Preparation requirements"],
        },
    },
    {
        icon: "Building",
        title: "General Construction",
        description: "Comprehensive construction services for residential and commercial projects.",
        longDescription:
            "From small renovations to major construction projects, we deliver quality results on time and within budget. Our experienced team handles all aspects of construction with attention to detail and commitment to excellence.",
        detailedDescription:
            "Our general construction services cover the full spectrum of building projects, from minor repairs to major renovations and new construction. We bring together skilled craftsmen, project managers, and quality materials to deliver exceptional results. Every project is managed with attention to detail, safety compliance, and customer satisfaction.",
        features: [
            "Project planning and management",
            "Quality construction services",
            "Material sourcing and procurement",
            "Safety compliance and monitoring",
            "Timely project delivery",
            "Building permit assistance",
            "Design consultation services",
            "Post-construction support",
        ],
        benefits: [
            "Professional project management",
            "Quality craftsmanship",
            "Timely completion",
            "Cost-effective solutions",
            "Safety compliance",
            "Comprehensive service",
        ],
        process: [
            {
                step: 1,
                title: "Project Consultation",
                description: "Initial meeting to discuss project requirements, timeline, and budget.",
            },
            {
                step: 2,
                title: "Planning & Design",
                description: "Detailed project planning, design development, and permit acquisition.",
            },
            {
                step: 3,
                title: "Construction Phase",
                description: "Professional construction work with regular progress updates and quality control.",
            },
            {
                step: 4,
                title: "Quality Inspection",
                description: "Comprehensive inspection and testing to ensure all work meets standards.",
            },
            {
                step: 5,
                title: "Project Completion",
                description: "Final walkthrough, documentation, and handover with warranty information.",
            },
        ],
        duration: "1-12 weeks",
        warranty: "2 years",
        slug: "general-construction",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&crop=center",
        gallery: [
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop&crop=center",
        ],
        faqs: [
            {
                question: "Do you handle building permits?",
                answer: "Yes, we assist with all necessary building permits and ensure compliance with local regulations.",
            },
            {
                question: "Can you work within my budget?",
                answer: "We work closely with clients to develop cost-effective solutions that meet both budget and quality requirements.",
            },
            {
                question: "What types of construction projects do you handle?",
                answer: "We handle residential and commercial projects including renovations, additions, and new construction.",
            },
        ],
        pricing: {
            starting: "From $5,000",
            factors: ["Project scope", "Materials required", "Timeline", "Complexity"],
        },
    },
    {
        icon: "Droplets",
        title: "Waterproofing Treatment",
        description: "Complete waterproofing solutions for tanks, basements, lift chambers, and more.",
        longDescription:
            "Comprehensive waterproofing solutions to protect your structures from water damage. We specialize in basement waterproofing, tank sealing, and structural protection using the latest materials and techniques.",
        detailedDescription:
            "Water damage can be devastating to buildings and structures. Our comprehensive waterproofing services provide complete protection against moisture infiltration. We use advanced materials and proven techniques to create effective barriers that keep water out while allowing structures to breathe naturally. Our solutions are designed for long-term performance and reliability.",
        features: [
            "Basement waterproofing systems",
            "Tank and reservoir sealing",
            "Lift chamber protection",
            "Foundation waterproofing",
            "Drainage system installation",
            "Membrane waterproofing",
            "Injection waterproofing",
            "Crystalline waterproofing",
        ],
        benefits: [
            "Complete water protection",
            "Prevents structural damage",
            "Improves indoor environment",
            "Long-lasting solutions",
            "Reduces maintenance costs",
            "Increases property value",
        ],
        process: [
            {
                step: 1,
                title: "Water Assessment",
                description: "Comprehensive evaluation of water infiltration sources and structural condition.",
            },
            {
                step: 2,
                title: "System Design",
                description: "Development of customized waterproofing solution based on specific requirements.",
            },
            {
                step: 3,
                title: "Surface Preparation",
                description: "Thorough preparation of surfaces for optimal waterproofing system performance.",
            },
            {
                step: 4,
                title: "System Installation",
                description: "Professional installation of waterproofing system using quality materials.",
            },
            {
                step: 5,
                title: "Testing & Validation",
                description: "Comprehensive testing to ensure complete water protection and system integrity.",
            },
        ],
        duration: "3-10 days",
        warranty: "10 years",
        slug: "waterproofing",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
        gallery: [
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop&crop=center",
            "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop&crop=center",
        ],
        faqs: [
            {
                question: "How long does waterproofing last?",
                answer: "Our waterproofing systems are designed to last 10+ years with proper maintenance and come with a comprehensive warranty.",
            },
            {
                question: "Can you waterproof existing structures?",
                answer: "Yes, we specialize in both new construction waterproofing and retrofitting existing structures.",
            },
            {
                question: "What areas can be waterproofed?",
                answer: "We waterproof basements, foundations, tanks, lift chambers, roofs, and any area requiring water protection.",
            },
        ],
        pricing: {
            starting: "From $2,500",
            factors: ["Area size", "Waterproofing method", "Access difficulty", "Structural condition"],
        },
    },
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
