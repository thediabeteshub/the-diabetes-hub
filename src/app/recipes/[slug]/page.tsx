import { getAllContentSlugs, getContentData } from "@/lib/content-parser";
import { notFound } from "next/navigation";
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';

const components = {
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
        <div className="relative my-8 aspect-video">
        <Image
        src={props.src as string || ''}
        alt={props.alt || 'Image from recipe post'}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-contain rounded-lg"
        />
        </div>
    ),
};

export async function generateStaticParams() {
    const paths = getAllContentSlugs("recipes");
    return paths;
}

export default async function RecipePostPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const { slug } = params;

    try {
        const { mdxSource, frontmatter } = await getContentData("recipes", slug);

        return (
            <article data-pagefind-body className="container mx-auto px-4 md:px-6 py-24 md:py-32">
            <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-brand-text-primary">
            {frontmatter.title}
            </h1>
            <p className="mt-4 text-lg text-brand-text-secondary">
            {frontmatter.description}
            </p>
            </header>

            {frontmatter.image && (
                <div className="relative mb-12 h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                src={frontmatter.image as string}
                alt={frontmatter.title}
                fill
                className="object-cover"
                priority
                />
                </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-12 border-y py-6">
            <div><p className="font-bold text-lg">{frontmatter.prepTime || 'N/A'}</p><p className="text-sm text-brand-text-secondary">Prep Time</p></div>
            <div><p className="font-bold text-lg">{frontmatter.cookTime || 'N/A'}</p><p className="text-sm text-brand-text-secondary">Cook Time</p></div>
            <div><p className="font-bold text-lg">{frontmatter.servings || 'N/A'}</p><p className="text-sm text-brand-text-secondary">Servings</p></div>
            <div><p className="font-bold text-lg">{frontmatter.difficulty || 'Easy'}</p><p className="text-sm text-brand-text-secondary">Difficulty</p></div>
            </div>

            <div className="prose prose-lg lg:prose-xl max-w-none prose-h2:font-heading prose-h2:font-bold prose-a:text-brand-accent-secondary prose-li:my-1">
            <MDXRemote source={mdxSource} components={components} />
            </div>
            </div>
            </article>
        );
    } catch {
        notFound();
    }
}
