import { getAllContentSlugs, getContentData } from "@/lib/content-parser";
import { notFound } from "next/navigation";
import { format } from 'date-fns';

// This function tells Next.js which pages to build
export async function generateStaticParams() {
    const paths = getAllContentSlugs("expert-advice");
    return paths;
}

export default async function ExpertAdvicePostPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    // AWAIT the params promise
    const { slug } = await params;

    try {
        const post = await getContentData("expert-advice", slug);

        return (
            <article className="container mx-auto px-4 md:px-6 py-24 md:py-32">
            <div className="max-w-3xl mx-auto">
            <header className="text-center mb-12">
            <p className="text-brand-accent-secondary font-semibold">Expert Advice</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold font-heading text-brand-text-primary">
            {post.title}
            </h1>
            <p className="mt-4 text-lg text-brand-text-secondary">
            By {post.author || 'The Diabetes Hub Expert'} on{" "}
            {format(new Date(post.date), "MMMM d, yyyy")}
            </p>
            </header>

            <div className="mb-12 h-80 bg-gray-200 rounded-2xl">
            {/* Placeholder for Featured Image */}
            </div>

            <div
            className="prose prose-lg lg:prose-xl max-w-none prose-h2:font-heading prose-h2:font-bold prose-a:text-brand-accent-secondary"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
            </div>
            </article>
        );
    } catch {
        // If the markdown file doesn't exist, show a 404 page
        notFound();
    }
}
