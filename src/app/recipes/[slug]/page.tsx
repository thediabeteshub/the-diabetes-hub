import { getAllContentSlugs, getContentData } from "@/lib/content-parser";
import { notFound } from "next/navigation";

// This function tells Next.js which recipe pages to pre-build
export async function generateStaticParams() {
    const paths = getAllContentSlugs("recipes");
    return paths;
}

export default async function RecipePostPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    // AWAIT the params promise
    const { slug } = await params;

    try {
        const recipe = await getContentData("recipes", slug);

        return (
            <article data-pagefind-body className="container mx-auto px-4 md:px-6 py-24 md:py-32">
            <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-brand-text-primary">
            {recipe.title}
            </h1>
            <p className="mt-4 text-lg text-brand-text-secondary">
            {recipe.description}
            </p>
            </header>

            <div className="mb-12 h-96 bg-gray-200 rounded-2xl">
            {/* Placeholder for Featured Recipe Image */}
            </div>

            {/* Recipe Meta Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-12 border-y py-6">
            <div>
            <p className="font-bold text-lg">{recipe.prepTime || 'N/A'}</p>
            <p className="text-sm text-brand-text-secondary">Prep Time</p>
            </div>
            <div>
            <p className="font-bold text-lg">{recipe.cookTime || 'N/A'}</p>
            <p className="text-sm text-brand-text-secondary">Cook Time</p>
            </div>
            <div>
            <p className="font-bold text-lg">{recipe.servings || 'N/A'}</p>
            <p className="text-sm text-brand-text-secondary">Servings</p>
            </div>
            <div>
            <p className="font-bold text-lg">{recipe.difficulty || 'Easy'}</p>
            <p className="text-sm text-brand-text-secondary">Difficulty</p>
            </div>
            </div>

            <div
            className="prose prose-lg lg:prose-xl max-w-none prose-h2:font-heading prose-h2:font-bold prose-a:text-brand-accent-secondary prose-li:my-1"
            dangerouslySetInnerHTML={{ __html: recipe.contentHtml }}
            />
            </div>
            </article>
        );
    } catch {
        // If the markdown file doesn't exist, show a 404 page
        notFound();
    }
}
