"use client"

import { useEffect } from "react"

export function PerformanceMetrics() {
    useEffect(() => {
        // Track Core Web Vitals
        if (typeof window !== "undefined" && "performance" in window) {
            // Track page load time
            window.addEventListener("load", () => {
                const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
                console.log(`[v0] Page load time: ${loadTime}ms`)
            })

            // Track First Contentful Paint
            if ("PerformanceObserver" in window) {
                const observer = new PerformanceObserver((list) => {
                    for (const entry of list.getEntries()) {
                        if (entry.name === "first-contentful-paint") {
                            console.log(`[v0] First Contentful Paint: ${entry.startTime}ms`)
                        }
                    }
                })
                observer.observe({ entryTypes: ["paint"] })
            }
        }
    }, [])

    return null
}
