import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function FreeDownload() {
  return (
    <section className="py-16 md:py-24 bg-brand-footer text-white" data-aos="fade-up">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Get Your Free Resources & Guides</h2>
          <p className="mt-4 text-lg text-slate-300">
            Access our complete library of printable food lists, meal planners, and expert guides to help you on your journey.
          </p>
          <ul className="mt-6 space-y-2 list-disc list-inside text-slate-300">
            <li>Easy-to-read Low-GI Food Lists.</li>
            <li>Actionable 7-Day Meal Plans.</li>
            <li>Healthy Snack Ideas & Checklists.</li>
          </ul>
          <Button asChild size="lg" className="mt-8 bg-brand-cta-primary hover:bg-brand-cta-hover text-white">
            <Link href="/free-download">Explore All Free Downloads</Link>
          </Button>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="w-64 h-80 bg-slate-700 rounded-lg flex items-center justify-center -rotate-3">
            <span className="text-slate-400">PDF Guides</span>
          </div>
        </div>
      </div>
    </section>
  );
}
