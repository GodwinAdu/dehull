import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { AboutStory } from "@/components/about-story"
import { MissionVision } from "@/components/mission-vision"
import { TeamSection } from "@/components/team-section"
import { CompanyValues } from "@/components/company-values"
import { AboutStats } from "@/components/about-stats"

export const metadata = {
  title: "About Us - Dehull Zion Ventures",
  description:
    "Learn about Dehull Zion Ventures - our mission, vision, values, and the experienced team behind our professional construction and maintenance services.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <AboutStory />
      <MissionVision />
      <CompanyValues />
      <AboutStats />
      <TeamSection />
      <Footer />
    </main>
  )
}
