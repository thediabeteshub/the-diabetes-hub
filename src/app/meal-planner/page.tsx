import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function MealPlannerPage() {
    return (
        <div className="bg-brand-background-alt">
        <div className="container mx-auto px-4 md:px-6 min-h-[80vh] flex items-center justify-center text-center">
        <div>
        <span className="text-6xl md:text-8xl" role="img" aria-label="Calendar emoji">📅</span>
        <h1 className="mt-8 text-4xl md:text-5xl font-bold font-heading">
        The Weekly Meal Planner is Coming Soon!
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-brand-text-secondary">
        We are working hard to bring you an interactive tool that will help you plan your diabetes-friendly meals with ease. Plan your week, generate shopping lists, and stay on track with your health goals.
        </p>
        <p className="mt-4 text-lg md:text-xl text-brand-text-secondary">
        Join our newsletter to be the first to know when it launches!
        </p>

        <div className="mt-10">
        <Button asChild size="lg" className="bg-brand-cta-primary hover:bg-brand-cta-hover text-white font-bold px-10 py-7 text-lg">
        <Link href="#"> {/* Replace with Newsletter link/modal trigger later */}
        Join the Waitlist
        </Link>
        </Button>
        </div>
        </div>
        </div>
        </div>
    );
}
