import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
    return (
        <>
        {/* Hero Section */}
        <section className="bg-teal-50 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-heading">
        You don&apos;t have to figure this out alone.
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-brand-text-secondary">
        Welcome to The Diabetes Hub. We&apos;re a community dedicated to one simple idea: managing diabetes or prediabetes shouldn&apos;t mean giving up the rich, vibrant flavors of South Asian food you love.
        </p>
        </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
        <h2 className="text-3xl font-bold font-heading mb-4">Our Story</h2>
        <p className="text-lg text-brand-text-secondary mb-4">
        The Diabetes Hub was born from a personal journey. After a family member&apos;s prediabetes diagnosis, we saw firsthand the struggle to find reliable, culturally relevant advice. The standard recommendations often felt bland and disconnected from our traditions.
        </p>
        <p className="text-lg text-brand-text-secondary">
        We knew there had to be a better way—a way to blend modern, science-backed nutritional guidance with the timeless wisdom of our own kitchens. We started experimenting, testing, and creating delicious, low-glycemic versions of our favorite dishes. This platform is the result of that journey, created to share what we&apos;ve learned and build a supportive space for others on the same path.
        </p>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
        {/* Placeholder for a friendly image */}
        <div className="w-full h-80 max-w-sm bg-gray-200 rounded-2xl shadow-lg"></div>
        </div>
        </div>
        </section>

        {/* What You'll Find Section */}
        <section className="bg-brand-background-alt py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-heading">What You&apos;ll Find Here</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-text-secondary">
        We&apos;ve designed everything to be simple, practical, and empowering.
        </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Item 1 */}
        <div className="text-center p-6">
        <h3 className="text-xl font-bold mb-2">Diabetes-Friendly Recipes</h3>
        <p className="text-brand-text-secondary">
        From breakfast to dessert, discover South Asian dishes that are both delicious and blood-sugar-friendly.
        </p>
        </div>
        {/* Item 2 */}
        <div className="text-center p-6">
        <h3 className="text-xl font-bold mb-2">Smart Eating Tools</h3>
        <p className="text-brand-text-secondary">
        Use our guides and planners to take the guesswork out of mealtime and make healthy choices with confidence.
        </p>
        </div>
        {/* Item 3 */}
        <div className="text-center p-6">
        <h3 className="text-xl font-bold mb-2">A Supportive Community</h3>
        <p className="text-brand-text-secondary">
        You&apos;re part of a community that understands your challenges and celebrates your successes. Welcome home.
        </p>
        </div>
        </div>
        </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading">Ready to Start Your Journey?</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-text-secondary">
        The best place to begin is with our comprehensive Low-GI Guide. It&apos;s completely free and packed with actionable tips.
        </p>
        <Button asChild size="lg" className="mt-8 bg-brand-cta-primary hover:bg-brand-cta-hover text-white font-bold px-8 py-6 text-lg">
        <Link href="/low-gi-guide">Read the Free Guide</Link>
        </Button>
        </div>
        </section>
        </>
    );
}
