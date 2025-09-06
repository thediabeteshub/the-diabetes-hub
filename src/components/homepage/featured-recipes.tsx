import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const featuredRecipes = [
    {
        slug: "/recipes/quick-chickpea-curry",
        title: "Quick Chickpea & Spinach Curry",
        description: "A hearty and healthy weeknight meal that's ready in under 30 minutes.",
        tags: ["Dinner", "Vegan"],
    },
{
    slug: "#",
    title: "Masala Oats Upma",
    description: "A savory and fiber-rich breakfast to keep you full and energized.",
    tags: ["Breakfast"],
},
{
    slug: "#",
    title: "Tandoori Tofu Skewers",
    description: "A protein-packed appetizer or main course perfect for grilling.",
    tags: ["Snack", "Vegetarian"],
},
];

export function FeaturedRecipes() {
    return (
        <section className="py-16 md:py-24 bg-brand-background-alt" data-aos="fade-up">
        <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-heading">
        Featured Recipes
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-text-secondary">
        Discover delicious, blood-sugar-friendly dishes you can make today.
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredRecipes.map((recipe) => (
            <Card key={recipe.title} className="overflow-hidden h-full shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <Link href={recipe.slug} className="group block">
            <CardHeader className="p-0">
            <div className="relative h-56 w-full">
            <div className="bg-gray-200 h-full w-full group-hover:scale-105 transition-transform duration-300"></div>
            </div>
            </CardHeader>
            </Link>
            <CardContent className="p-6 flex-grow flex flex-col">
            <div className="flex gap-2 mb-2">
            {recipe.tags.map(tag => (
                <span key={tag} className="text-xs font-semibold text-orange-800 bg-orange-100 px-2 py-1 rounded-full">{tag}</span>
            ))}
            </div>
            <CardTitle className="text-xl font-bold">
            <Link href={recipe.slug} className="hover:text-brand-accent-primary transition-colors">{recipe.title}</Link>
            </CardTitle>
            <p className="mt-2 text-brand-text-secondary line-clamp-2 flex-grow">{recipe.description}</p>
            <div className="mt-4">
            <Button asChild variant="link" className="p-0 h-auto font-bold text-brand-accent-secondary">
            <Link href={recipe.slug}>View Recipe →</Link>
            </Button>
            </div>
            </CardContent>
            </Card>
        ))}
        </div>

        <div className="text-center mt-12">
        <Button asChild size="lg" variant="outline">
        <Link href="/recipes">Explore All Recipes</Link>
        </Button>
        </div>
        </div>
        </section>
    );
}
