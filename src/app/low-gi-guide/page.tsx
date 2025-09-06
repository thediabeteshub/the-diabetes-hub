import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function LowGiGuidePage() {
    return (
        <>
        <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
        {/* Page Header */}
        <header className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-heading">
        The Ultimate Low-Glycemic Guide for South Asian Foods
        </h1>
        <p className="mt-4 text-xl text-brand-text-secondary">
        Your complete resource for understanding and implementing a low-GI diet without giving up the flavors you love.
        </p>
        </header>

        {/* --- NEW: Prominent CTA Box --- */}
        <section className="max-w-3xl mx-auto my-16">
        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-8">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-6">
        <div className="text-5xl" role="img" aria-label="Book emoji">📚</div>
        <div>
        <h2 className="text-2xl font-bold font-heading">Get the Printable PDF Version</h2>
        <p className="mt-2 text-brand-text-secondary">
        Want to save this guide for later? Fill out a quick form to download the complete guide as a beautifully formatted PDF.
        </p>
        </div>
        <div className="md:ml-auto flex-shrink-0">
        <Button asChild size="lg" className="bg-brand-cta-primary hover:bg-brand-cta-hover text-white font-bold px-6 py-6 text-base">
        <Link href="#" target="_blank" rel="noopener noreferrer"> {/* TODO: Replace with Google Form link */}
        Download PDF Guide
        </Link>
        </Button>
        </div>
        </div>
        </div>
        </section>

        {/* --- Main Guide Content Area --- */}
        <div className="flex flex-col lg:flex-row gap-12">
        {/* Sticky Sidebar Navigation */}
        <aside className="lg:w-1/4">
        <div className="sticky top-28">
        <h3 className="text-lg font-bold mb-4">On this page</h3>
        <ul className="space-y-2">
        <li><a href="#what-is-gi" className="text-brand-text-secondary hover:text-brand-accent-secondary">1. What is the Glycemic Index?</a></li>
        <li><a href="#why-it-matters" className="text-brand-text-secondary hover:text-brand-accent-secondary">2. Why It Matters for Diabetes</a></li>
        <li><a href="#low-gi-foods" className="text-brand-text-secondary hover:text-brand-accent-secondary">3. Low-GI South Asian Foods</a></li>
        <li><a href="#smart-swaps" className="text-brand-text-secondary hover:text-brand-accent-secondary">4. Smart Swaps for Your Kitchen</a></li>
        </ul>
        </div>
        </aside>

        {/* Main Article Content */}
        <main className="lg:w-3/4">
        <article className="prose prose-lg lg:prose-xl max-w-none prose-h2:font-heading prose-h2:font-bold prose-a:text-brand-accent-secondary">
        <section id="what-is-gi">
        <h2>1. What is the Glycemic Index?</h2>
        <p>
        The Glycemic Index (GI) is a powerful tool for managing blood sugar levels...
        </p>
        <ul>
        <li><strong>Low GI (55 or less):</strong> These foods are digested and absorbed slowly...</li>
        <li><strong>Medium GI (56-69):</strong> These foods cause a moderate rise...</li>
        <li><strong>High GI (70 or more):</strong> These foods are quickly digested...</li>
        </ul>
        </section>

        <section id="why-it-matters" className="mt-12">
        <h2>2. Why It Matters for Diabetes Management</h2>
        <p>
        For people with diabetes, the primary goal is to keep blood sugar levels stable...
        </p>
        </section>

        <section id="low-gi-foods" className="mt-12">
        <h2>3. Your Go-To List of Low-GI South Asian Foods</h2>
        <p>
        Contrary to popular belief, a South Asian diet can be incredibly diabetes-friendly...
        </p>
        <ul>
        <li><strong>Lentils & Legumes:</strong> Dal (lentils), chickpeas (chana)...</li>
        <li><strong>Vegetables:</strong> Most non-starchy vegetables like spinach, cauliflower...</li>
        <li><strong>Grains:</strong> Rolled or steel-cut oats, barley, and quinoa are excellent choices...</li>
        </ul>
        </section>

        <section id="smart-swaps" className="mt-12">
        <h2>4. Smart Swaps for a Healthier Kitchen</h2>
        <p>Making small changes can have a big impact. Here are some simple swaps:</p>
        <ul>
        <li>Swap white rice for basmati or brown rice.</li>
        <li>Swap potatoes for sweet potatoes or cauliflower.</li>
        <li>Swap white bread or naan for whole-wheat or almond flour roti.</li>
        <li>Use yogurt-based marinades instead of sugary sauces.</li>
        </ul>
        </section>
        </article>

        {/* --- NEW: Bottom CTA Section --- */}
        <section className="mt-16 pt-16 border-t text-center">
        <h2 className="text-3xl font-bold font-heading">Ready to Put This Into Practice?</h2>
        <p className="mt-4 max-w-xl mx-auto text-lg text-brand-text-secondary">
        Download the complete guide as a printable PDF to keep as a handy reference in your kitchen.
        </p>
        <Button asChild size="lg" className="mt-8 bg-brand-cta-primary hover:bg-brand-cta-hover text-white font-bold px-8 py-6 text-lg">
        <Link href="#" target="_blank" rel="noopener noreferrer"> {/* TODO: Replace with Google Form link */}
        Download the PDF Guide
        </Link>
        </Button>
        </section>

        </main>
        </div>
        </div>
        </>
    );
}
