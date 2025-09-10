import { getAllContentSlugs, getContentData } from "@/lib/content-parser";
import { notFound } from "next/navigation";
import { format } from 'date-fns';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';

const components = {
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
        <div className="relative my-8 aspect-video">
        <Image
        src={props.src as string || ''}
        alt={props.alt || 'Image from expert advice post'}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-contain rounded-lg"
        />
        </div>
    ),
};

export async function generateStaticParams() {
    const paths = getAllContentSlugs("expert-advice");
    return paths;
}

export default async function ExpertAdvicePostPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const { slug } = params;

    try {
        // Change mdxSource to content
        const { content, frontmatter } = getContentData("expert-advice", slug);

        return (
            <article className="container mx-auto px-4 md:px-6 py-24 md:py-32">
            <div className="max-w-3xl mx-auto">
            <header className="text-center mb-12">
            <p className="text-brand-accent-secondary font-semibold">Expert Advice</p>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold font-heading text-brand-text-primary">
            {frontmatter.title}
            </h1>
            <p className="mt-4 text-lg text-brand-text-secondary">
            By {frontmatter.author || 'The Diabetes Hub Expert'} on{" "}
            {format(new Date(frontmatter.date), "MMMM d, yyyy")}
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

            <div className="prose prose-lg lg:prose-xl max-w-none prose-h2:font-heading prose-h2:font-bold prose-a:text-brand-accent-secondary">
            {/* Use content instead of mdxSource */}
            <MDXRemote source={content} components={components} />
            </div>
            </div>
            </article>
        );
    } catch {
        notFound();
    }
}
