import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactForms } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { ContactMap } from "@/components/contact-map"
import { ContactCTA } from "@/components/contact-cta"

export const metadata = {
  title: "Contact Us - Dehull Zion Ventures",
  description:
    "Get in touch with Dehull Zion Ventures for professional construction and maintenance services. Request a quote, schedule a consultation, or ask questions.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactHero />
      <ContactForms />
      <ContactInfo />
      <ContactMap />
      <ContactCTA />
      <Footer />
    </main>
  )
}
