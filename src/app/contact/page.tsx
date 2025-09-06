import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-heading">
        Get in Touch
        </h1>
        <p className="mt-6 text-lg md:text-xl text-brand-text-secondary">
        Have a question, a suggestion, or a collaboration idea? We&apos;d love to hear from you! The best way to reach us is by filling out our contact form.
        </p>
        <p className="mt-4 text-lg md:text-xl text-brand-text-secondary">
        We read every message and will do our best to respond within 48 business hours.
        </p>

        <div className="mt-10">
        <Button asChild size="lg" className="bg-brand-accent-secondary hover:bg-brand-accent-secondary/90 text-white font-bold px-10 py-7 text-lg">
        <Link
        href="#" // TODO: Replace with your actual Google Form link
        target="_blank"
        rel="noopener noreferrer"
        >
        Open Contact Form
        </Link>
        </Button>
        </div>

        <div className="mt-16 pt-10 border-t">
        <h2 className="text-2xl font-bold font-heading">Partnerships & Media</h2>
        <p className="mt-4 text-lg text-brand-text-secondary">
        For all media inquiries, brand partnerships, or collaborations, please email us directly at:
        <Link href="mailto:partners@thediabeteshub.com" className="block mt-2 font-semibold text-brand-accent-primary hover:underline">
        partners@thediabeteshub.com
        </Link>
        </p>
        </div>
        </div>
        </div>
    );
}
