import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Placeholder data for recipes. We'll connect this to Markdown files later.
const recipes = [
    {
        slug: "#",
        title: "Quick Chickpea & Spinach Curry",
        description: "A hearty and healthy weeknight meal that's ready in under 30 minutes.",
        tags: ["Low GI", "Vegan", "Dinner"],
        image: "/images/recipes/chickpea-curry.jpg",
    },
{
    slug: "#",
    title: "Masala Oats Upma",
    description: "A savory and fiber-rich breakfast to keep you full and energized.",
    tags: ["Low GI", "Breakfast"],
    image: "/images/recipes/masala-oats.jpg",
},
{
    slug: "#",
    title: "Tandoori Tofu Skewers",
    description: "A protein-packed appetizer or main course perfect for grilling.",
    tags: ["Low GI", "Vegetarian", "Snack"],
    image: "/images/recipes/tandoori-tofu.jpg",
},
{
    slug: "#",
    title: "Almond Flour Roti",
    description: "A delicious, gluten-free, and low-carb alternative to traditional roti.",
    tags: ["Low Carb", "Keto Friendly"],
    image: "/images/recipes/almond-roti.jpg",
},
{
    slug: "#",
    title: "Sprouted Mung Bean Salad",
    description: "A refreshing and nutrient-dense salad, great for lunch or as a side dish.",
    tags: ["Low GI", "Salad", "Lunch"],
    image: "/images/recipes/mung-bean-salad.jpg",
},
{
    slug: "#",
    title: "Sugar-Free Date & Nut Ladoo",
    description: "A healthy, naturally sweetened treat to satisfy your dessert cravings.",
    tags: ["Dessert", "No Added Sugar"],
    image: "/images/recipes/date-ladoo.jpg",
},
];

export default function RecipesPage() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
        <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-heading">
        Diabetes-Friendly Recipes
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-text-secondary">
        Delicious and healthy South Asian dishes to help you manage your blood sugar.
        </p>
        </div>

        {/* TODO: Add filtering UI here in the future */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
            <Link href={`/recipes/${recipe.slug}`} key={recipe.title} className="group block">
            <Card className="overflow-hidden h-full shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
            <CardHeader className="p-0">
            <div className="relative h-56 w-full">
            {/* Placeholder for Image */}
            <div className="bg-gray-200 h-full w-full group-hover:scale-105 transition-transform duration-300"></div>
            </div>
            </CardHeader>
            <CardContent className="p-6">
            <div className="flex gap-2 mb-2">
            {recipe.tags.map(tag => (
                <span key={tag} className="text-xs font-semibold text-brand-accent-secondary bg-teal-100 px-2 py-1 rounded-full">{tag}</span>
            ))}
            </div>
            <CardTitle className="text-xl font-bold group-hover:text-brand-accent-primary transition-colors">
            {recipe.title}
            </CardTitle>
            <p className="mt-2 text-brand-text-secondary line-clamp-2">
            {recipe.description}
            </p>
            </CardContent>
            </Card>
            </Link>
        ))}
        </div>
        </div>
    );
}
