import Link from "next/link";
import Image from "next/image"; // <-- 1. Import the Image component
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSortedContentData } from "@/lib/content-parser";

export default function RecipesPage() {
    // Fetch all recipe data
    const recipes = getSortedContentData("recipes");

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
            <Link href={`/recipes/${recipe.slug}`} key={recipe.slug} className="group block">
            <Card className="overflow-hidden h-full shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
            <CardHeader className="p-0">
            <div className="relative h-56 w-full">
            {/* --- 2. START: This is the updated image block --- */}
            {recipe.image ? (
                <Image
                src={recipe.image as string}
                alt={recipe.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
            ) : (
                <div className="bg-gray-200 h-full w-full"></div>
            )}
            {/* --- END: This is the updated image block --- */}
            </div>
            </CardHeader>
            <CardContent className="p-6">
            {recipe.tags && (
                <div className="flex flex-wrap gap-2 mb-2">
                {recipe.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold text-brand-accent-secondary bg-teal-100 px-2 py-1 rounded-full">{tag}</span>
                ))}
                </div>
            )}
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
