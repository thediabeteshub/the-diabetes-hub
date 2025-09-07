import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const tools = [
    {
        title: "Glycemic Index Calculator",
        description: "Estimate the glycemic index of your meals to make better food choices.",
        href: "/tools/gi-calculator",
        icon: "🧮",
        status: "Coming Soon"
    },
{
    title: "Recipe Finder & Filter",
    description: "Filter our entire recipe database by meal type, ingredients, and GI level.",
    href: "/recipes",
    icon: "🍲",
    status: "Coming Soon"
},
{
    title: "Weekly Meal Planner",
    description: "Plan your weekly meals for balanced blood sugar and print your shopping list.",
    href: "/tools/meal-planner",
    icon: "📅",
    status: "Coming Soon"
},
{
    title: "Carb Counter",
    description: "Quickly look up the carbohydrate content of common South Asian foods.",
    href: "/tools/carb-counter",
    icon: "📊",
    status: "Coming Soon"
}
];

export default function ToolsPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
        <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-heading">
        Smart Eating Tools
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-text-secondary">
        Practical resources designed to simplify your health and wellness journey.
        </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {tools.map((tool) => (
            <Link href={tool.href} key={tool.title} className="group block">
            <Card className="text-center h-full shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 p-8">
            <CardHeader>
            <div className="mx-auto bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="text-4xl">{tool.icon}</span>
            </div>
            <CardTitle className="mt-6 text-2xl font-bold group-hover:text-brand-accent-primary">
            {tool.title}
            </CardTitle>
            <span className={`mt-2 inline-block px-3 py-1 text-sm font-semibold rounded-full ${tool.status === 'Live' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
            {tool.status}
            </span>
            </CardHeader>
            <CardContent>
            <p className="text-brand-text-secondary text-lg">{tool.description}</p>
            </CardContent>
            </Card>
            </Link>
        ))}
        </div>
        </div>
    );
}
