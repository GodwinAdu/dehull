import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Suspense } from "react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { LoadingSpinner } from "@/components/loading-spinner"
import "./globals.css"
import Agent from "@/components/Agent"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dehull Zion Ventures - Professional Construction & Maintenance Services",
  description:
    "Expert industrial cleaning, waterproofing, painting, and general construction services. Professional solutions for all your building maintenance needs.",
  generator: "v0.app",
  keywords: "construction, industrial cleaning, waterproofing, painting, maintenance, building services",
  authors: [{ name: "Dehull Zion Ventures" }],
  creator: "Dehull Zion Ventures",
  publisher: "Dehull Zion Ventures",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dehullzionventures.com",
    title: "Dehull Zion Ventures - Professional Construction & Maintenance Services",
    description:
      "Expert industrial cleaning, waterproofing, painting, and general construction services. Professional solutions for all your building maintenance needs.",
    siteName: "Dehull Zion Ventures",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dehull Zion Ventures - Professional Construction & Maintenance Services",
    description: "Expert industrial cleaning, waterproofing, painting, and general construction services.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
        <Agent />
        <ScrollToTop />
      </body>
    </html>
  )
}
