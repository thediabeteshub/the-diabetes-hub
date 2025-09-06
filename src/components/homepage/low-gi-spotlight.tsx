import Link from "next/link"
import { Button } from "@/components/ui/button"

export function LowGiSpotlight() {
    return (
        <section className="py-16 md:py-24 bg-teal-50" data-aos="fade-up">
        <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-text-primary">
        Your Ultimate Low-GI Guide
        </h2>
        <p className="mt-4 text-lg text-brand-text-secondary">
        Navigate the world of low-glycemic eating with confidence. Our comprehensive guide breaks down everything you need to know, from food lists to meal planning strategies, all tailored for the South Asian palate.
        </p>
        <Button asChild size="lg" className="mt-8 bg-brand-accent-secondary hover:bg-brand-accent-secondary/90 text-white">
        <Link href="/low-gi-guide">Read The Guide</Link>
        </Button>
        </div>
        <div className="flex items-center justify-center">
        {/* Placeholder for illustration */}
        <div className="w-full max-w-md h-72 bg-teal-200 rounded-2xl flex items-center justify-center">
        <span className="text-teal-600 font-medium">Illustration Here</span>
        </div>
        </div>
        </div>
        </div>
        </section>
    )
}
