import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { ServicesGrid } from "@/components/service-grid"
import { ServicesCTA } from "@/components/services-cta"

export const metadata = {
    title: "Professional Services - Dehull Zion Ventures",
    description:
        "Comprehensive construction and maintenance services including industrial cleaning, waterproofing, painting, pool repairs, and general construction.",
}

export default function ServicesPage() {
    return (
        <main className="min-h-screen">
            <Navigation />
            <ServicesHero />
            <ServicesGrid />
            <ServicesCTA />
            <Footer />
        </main>
    )
}
