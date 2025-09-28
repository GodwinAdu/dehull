import type React from "react"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
    children: ReactNode
    className?: string
    hover?: boolean
}

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
    return (
        <div
            className={cn(
                "glass-card rounded-xl p-6",
                hover && "hover-lift cursor-pointer",
                "will-change-transform gpu-accelerated",
                className,
            )}
        >
            {children}
        </div>
    )
}

export function GlassButton({
    children,
    className,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }) {
    return (
        <button
            className={cn("glass-button rounded-lg px-6 py-3 font-medium", "button-press will-change-transform", className)}
            {...props}
        >
            {children}
        </button>
    )
}
