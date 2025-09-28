import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServiceDetailHero } from "@/components/service-detail-hero"
import { ServiceDetailContent } from "@/components/service-detail-content"
import { ServiceDetailCTA } from "@/components/service-detail-cta"
import { RelatedServices } from "@/components/related-services"
import { notFound } from "next/navigation"
import { getServiceBySlug, getAllServices } from "@/lib/services-data"

export async function generateStaticParams() {
  const services = getAllServices()
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const {slug }= await params
  const service =  await getServiceBySlug(slug)

  if (!service) {
    return {
      title: "Service Not Found",
    }
  }

  return {
    title: `${service.title} - Dehull Zion Ventures`,
    description: service.description,
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <ServiceDetailHero service={service} />
      <ServiceDetailContent service={service} />
      <ServiceDetailCTA service={service} />
      <RelatedServices currentService={service} />
      <Footer />
    </main>
  )
}
