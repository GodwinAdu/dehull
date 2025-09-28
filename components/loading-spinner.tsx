export function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="relative">
                <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-secondary rounded-full animate-spin animate-delay-200"></div>
            </div>
        </div>
    )
}
