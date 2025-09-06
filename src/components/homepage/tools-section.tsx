import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const tools = [
    { title: "GI Calculator", description: "Estimate the glycemic index of your meals.", href: "/tools/gi-calculator" },
{ title: "Recipe Finder", description: "Filter recipes by meal type, ingredients, and GI.", href: "/recipes" },
{ title: "Meal Planner", description: "Plan your weekly meals for balanced blood sugar.", href: "/meal-planner" },
];

export function ToolsSection() {
    return (
        <section className="py-16 md:py-24" data-aos="fade-up">
        <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-heading">Smart Eating Tools</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-text-secondary">Practical resources to simplify your health journey.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tools.map((tool) => (
            <Card key={tool.title} className="text-center h-full shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col">
            <CardHeader>
            <div className="mx-auto bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="text-3xl">🛠️</span>
            </div>
            <CardTitle className="mt-4 text-xl font-bold">{tool.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
            <p className="text-brand-text-secondary flex-grow">{tool.description}</p>
            <div className="mt-4">
            <Button asChild variant="outline">
            <Link href={tool.href}>Use Tool</Link>
            </Button>
            </div>
            </CardContent>
            </Card>
        ))}
        </div>
        </div>
        </section>
    );
}
