import Link from "next/link";

export function SiteFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-footer text-brand-text-footer">
        <div className="container mx-auto px-4 md:px-6 py-16">
        {/* Main Grid for Links & Brand Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

        {/* Column 1: Brand */}
        <div>
        <h3 className="text-2xl font-bold text-white mb-4">TheDiabetesHub</h3>
        <p className="max-w-md text-slate-400">
        Empowering you with simple tips, recipes, and tools for a healthier lifestyle.
        </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
        <h4 className="font-semibold text-white mb-4">Quick Links</h4>
        <ul className="space-y-2">
        <li><Link href="/blog" className="text-slate-400 hover:text-brand-accent-primary transition-colors">Blog</Link></li>
        <li><Link href="/recipes" className="text-slate-400 hover:text-brand-accent-primary transition-colors">Recipes</Link></li>
        <li><Link href="/low-gi-guide" className="text-slate-400 hover:text-brand-accent-primary transition-colors">Low-GI Guide</Link></li>
        <li><Link href="/tools" className="text-slate-400 hover:text-brand-accent-primary transition-colors">Tools</Link></li>
        </ul>
        </div>

        {/* Column 3: Resources -- UPDATED SECTION */}
        <div>
        <h4 className="font-semibold text-white mb-4">Resources</h4>
        <ul className="space-y-2">
        <li><Link href="/about" className="text-slate-400 hover:text-brand-accent-primary transition-colors">About Us</Link></li>
        <li><Link href="/contact" className="text-slate-400 hover:text-brand-accent-primary transition-colors">Contact</Link></li>
        <li><Link href="/expert-advice" className="text-slate-400 hover:text-brand-accent-primary transition-colors">Expert Advice</Link></li>
        {/* --- ADDED THIS LINE --- */}
        <li><Link href="/meal-planner" className="text-slate-400 hover:text-brand-accent-primary transition-colors">Meal Planner</Link></li>
        </ul>
        </div>

        {/* Column 4: Social Links & Copyright */}
        <div>
        <h4 className="font-semibold text-white mb-4">Follow Us</h4>
        <div className="flex space-x-4">
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-accent-primary transition-colors">
        <InstagramIcon className="h-6 w-6" />
        <span className="sr-only">Instagram</span>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-accent-primary transition-colors">
        <FacebookIcon className="h-6 w-6" />
        <span className="sr-only">Facebook</span>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-accent-primary transition-colors">
        <YoutubeIcon className="h-6 w-6" />
        <span className="sr-only">YouTube</span>
        </a>
        </div>
        <p className="mt-8 text-slate-500 text-sm">
        &copy; {currentYear} TheDiabetesHub. <br/>All Rights Reserved.
        </p>
        </div>

        </div>

        {/* Footer Bottom - Legal Links Only */}
        <div className="mt-16 pt-8 border-t border-slate-700 text-center">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
        <Link href="/privacy-policy" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
        <Link href="/terms-of-service" className="text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
        <Link href="/medical-disclaimer" className="text-slate-500 hover:text-white transition-colors">Medical Disclaimer</Link>
        <Link href="/affiliate-disclosure" className="text-slate-500 hover:text-white transition-colors">Affiliate Disclosure</Link>
        </div>
        </div>
        </div>
        </footer>
    );
}


// SVG Icon Components
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10C2.5 6 7.5 4 12 4s9.5 2 9.5 3a24.12 24.12 0 0 1 0 10c0 1-4.5 3-9.5 3s-9.5-2-9.5-3Z"/>
        <path d="m10 15 5-3-5-3z"/>
        </svg>
    );
}
