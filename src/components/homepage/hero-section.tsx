"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function HeroSection() {
    return (
        <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background Gradient & Shapes */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-rose-50 to-teal-50 -z-10"></div>
        <FloatingShape className="absolute top-[15%] left-[10%] w-32 h-32 bg-teal-200/50" delay={0.2} />
        <FloatingShape className="absolute top-[20%] right-[15%] w-24 h-24 bg-orange-200/50" delay={0.5} />
        <FloatingShape className="absolute bottom-[20%] left-[20%] w-16 h-16 bg-rose-200/50" delay={0.8} />
        <FloatingShape className="absolute bottom-[25%] right-[25%] w-40 h-40 bg-teal-100/50" delay={0.3} />

        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="text-4xl md:text-6xl font-bold font-heading tracking-tight text-brand-text-primary"
        >
        Your Trusted Hub for{" "}
        <span className="text-brand-accent-primary">Low-GI Living</span>
        <br />& Smarter Choices for Diabetes
        </motion.h1>

        <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
        className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-brand-text-secondary"
        >
        Discover simple tips, recipes, and tools to make diabetes-friendly
        living easy, healthy, and sustainable.
        </motion.p>

        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeInOut" }}
        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
        <Button asChild size="lg" className="bg-brand-cta-primary hover:bg-brand-cta-hover text-white font-bold text-lg px-8 py-6">
        <Link href="/low-gi-guide">Start the Low-GI Guide</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="font-bold text-lg px-8 py-6">
        <Link href="/recipes">Explore Recipes →</Link>
        </Button>
        </motion.div>
        </div>
        </section>
    )
}

// Helper component for floating shapes
function FloatingShape({ className, delay = 0 }: { className?: string, delay?: number }) {
    return (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay }}
        className={cn("rounded-full blur-2xl", className)}
        />
    );
}
