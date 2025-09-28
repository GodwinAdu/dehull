import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Footer } from "@/components/footer"
import { SEOSchema } from "@/components/seo-schema"
import { CookieBanner } from "@/components/cookie-banner"
import { StatsSection } from "@/components/stats-section"
import { ProjectShowcase } from "@/components/project-showcase"
import { CTASection } from "@/components/cta-section"
import { TestimonialsCarousel } from "@/components/testimonials-carouse"

export default function HomePage() {
  return (
    <>
      <SEOSchema />
      <main className="min-h-screen">
        <Navigation />
        <HeroSection />
        <StatsSection />
        <ServicesOverview />
        <ProjectShowcase />
        <WhyChooseUs />
        <TestimonialsCarousel />
        <CTASection />
        <Footer />
      </main>
      <CookieBanner />
    </>
  )
}
