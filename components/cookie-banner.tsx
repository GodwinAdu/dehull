"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent")
        if (!consent) {
            setShowBanner(true)
        }
    }, [])

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "accepted")
        setShowBanner(false)
    }

    const declineCookies = () => {
        localStorage.setItem("cookie-consent", "declined")
        setShowBanner(false)
    }

    if (!showBanner) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 shadow-lg z-50 animate-slide-in-left">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex-1">
                    <p className="text-sm text-muted-foreground">
                        We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you
                        consent to our use of cookies.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={declineCookies}>
                        Decline
                    </Button>
                    <Button size="sm" onClick={acceptCookies}>
                        Accept
                    </Button>
                    <Button variant="ghost" size="icon" onClick={declineCookies} className="h-8 w-8">
                        <X className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
