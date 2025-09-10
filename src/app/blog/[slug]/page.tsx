import { getAllContentSlugs, getContentData } from "@/lib/content-parser";
import { notFound } from "next/navigation";
import { format } from 'date-fns';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/components/mdx-components';

export async function generateStaticParams() {
    const paths = getAllContentSlugs("blog");
    return paths;
}

// Updated to handle params as a Promise
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    // Await the params promise
    const { slug } = await params;

    try {
        const { content, frontmatter } = getContentData("blog", slug);

        return (
            <article data-pagefind-body className="container mx-auto px-4 md:px-6 py-24 md:py-32">
            <div className="max-w-3xl mx-auto">
            <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-brand-text-primary">
            {frontmatter.title}
            </h1>
            <p className="mt-4 text-lg text-brand-text-secondary">
            Published on {format(new Date(frontmatter.date), 'MMMM d, yyyy')}
            </p>
            </header>

            {frontmatter.image && (
                <div className="relative mb-12 h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                src={frontmatter.image as string}
                alt={frontmatter.title}
                fill
                className="object-cover"
                priority
                />
                </div>
            )}

            <div
            className="prose prose-lg lg:prose-xl max-w-none prose-h2:font-heading prose-h2:font-bold prose-a:text-brand-accent-secondary"
            >
            <MDXRemote source={content} components={mdxComponents} />
            </div>
            </div>
            </article>
        );
    } catch {
        notFound();
    }
}
