import Link from 'next/link';

export function Newsletter() {
    return (
        <section className="py-16 md:py-24 bg-brand-background-alt" data-aos="fade-up">
        <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading">Join Our Community</h2>
        <p className="mt-4 text-lg text-brand-text-secondary">
        Get weekly diabetes-friendly recipes, tips, and support delivered right to your inbox. No spam, just value.
        </p>
        <div className="mt-8">
        <Link
        href="#" // Replace with your Google Form URL later
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full max-w-md"
        >
        <div className="flex items-center justify-between bg-white border border-gray-300 rounded-lg p-2 shadow-sm focus-within:ring-2 focus-within:ring-brand-cta-primary">
        <p className="text-gray-400 pl-3">Enter your email address</p>
        <div className="bg-brand-cta-primary text-white font-semibold rounded-md px-6 py-3 hover:bg-brand-cta-hover transition-colors">
        Subscribe
        </div>
        </div>
        </Link>
        </div>
        </div>
        </div>
        </section>
    );
}
