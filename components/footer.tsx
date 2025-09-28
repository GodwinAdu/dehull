import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Home, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                                <Home className="w-6 h-6 text-secondary-foreground" />
                            </div>
                            <div>
                                <div className="font-bold text-lg">Dehull Zion</div>
                                <div className="text-xs opacity-90">VENTURES</div>
                            </div>
                        </div>
                        <p className="text-primary-foreground/80 text-sm leading-relaxed">
                            Professional construction and maintenance services with a commitment to quality, reliability, and customer
                            satisfaction.
                        </p>
                        <div className="flex space-x-3">
                            <Button size="sm" variant="ghost" className="text-primary-foreground hover:text-secondary">
                                <Facebook className="w-5 h-5" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-primary-foreground hover:text-secondary">
                                <Instagram className="w-5 h-5" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-primary-foreground hover:text-secondary">
                                <Linkedin className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { href: "/", label: "Home" },
                                { href: "/about", label: "About Us" },
                                { href: "/services", label: "Services" },
                                { href: "/contact", label: "Contact" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            {[
                                "Industrial Cleaning",
                                "Waterproofing",
                                "Painting Services",
                                "Pool Repairs",
                                "Roof Repairs",
                                "General Construction",
                            ].map((service) => (
                                <li key={service}>
                                    <span className="text-primary-foreground/80 text-sm">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <Phone className="w-5 h-5 text-secondary mt-0.5" />
                                <div className="text-sm">
                                    <div className="text-primary-foreground/80">027 054 4044</div>
                                    <div className="text-primary-foreground/80">024 388 1733</div>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Mail className="w-5 h-5 text-secondary mt-0.5" />
                                <div className="text-sm">
                                    <div className="text-primary-foreground/80">dehullconstruct@gmail.com</div>
                                    <div className="text-primary-foreground/80">dinahokyere201@gmail.com</div>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-secondary mt-0.5" />
                                <div className="text-sm text-primary-foreground/80">Serving Ghana and surrounding areas</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-primary-foreground/60 text-sm">
                        © {currentYear} Dehull Zion Ventures. All rights reserved.
                    </div>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
