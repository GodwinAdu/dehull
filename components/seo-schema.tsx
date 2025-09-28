export function SEOSchema() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Dehull Zion Ventures",
        description:
            "Professional construction and maintenance services including industrial cleaning, waterproofing, painting, and general construction needs.",
        url: "https://dehullzionventures.com",
        logo: "https://dehullzionventures.com/logo.png",
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+27-054-4044",
            contactType: "customer service",
            availableLanguage: "English",
        },
        address: {
            "@type": "PostalAddress",
            addressCountry: "ZA",
        },
        sameAs: ["https://facebook.com/dehullzionventures", "https://linkedin.com/company/dehullzionventures"],
    }

    const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Construction and Maintenance Services",
        provider: {
            "@type": "Organization",
            name: "Dehull Zion Ventures",
        },
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Construction Services",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Industrial Cleaning",
                        description: "Professional industrial cleaning services for commercial and industrial facilities.",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Waterproofing Treatment",
                        description: "Comprehensive waterproofing solutions for tanks, basements, and lift chambers.",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Painting Services",
                        description: "Professional painting services for residential and commercial properties.",
                    },
                },
            ],
        },
    }

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
        </>
    )
}
