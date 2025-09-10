import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Post {
    slug: string;
    title: string;
    description?: string;
    tags?: string[];
    image?: string;
}

interface FeaturedBlogProps {
    posts: Post[];
}

export function FeaturedBlog({ posts }: FeaturedBlogProps) {
    return (
        <section className="py-16 md:py-24 bg-brand-background-alt" data-aos="fade-up">
        <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-heading">
        From Our Blog
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-text-secondary">
        Get the latest tips, research, and stories to support your journey.
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
            <Card key={post.slug} className="overflow-hidden h-full shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <Link href={`/blog/${post.slug}`} className="group block">
            <CardHeader className="p-0">
            <div className="relative h-56 w-full">
            {post.image ? (
                <Image
                src={post.image} // Use the path directly from frontmatter
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
            ) : (
                <div className="bg-gray-200 h-full w-full group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                <span className="text-brand-text-secondary">No image</span>
                </div>
            )}
            </div>
            </CardHeader>
            </Link>
            <CardContent className="p-6 flex-grow flex flex-col">
            {post.tags && post.tags.length > 0 && (
                <span className="text-sm font-semibold text-brand-accent-secondary bg-teal-100 px-3 py-1 rounded-full self-start">
                {post.tags[0]}
                </span>
            )}
            <CardTitle className="mt-4 text-xl font-bold">
            <Link href={`/blog/${post.slug}`} className="hover:text-brand-accent-primary transition-colors">
            {post.title}
            </Link>
            </CardTitle>
            <p className="mt-2 text-brand-text-secondary flex-grow">
            {post.description || "Read more about this topic..."}
            </p>
            <div className="mt-4">
            <Button asChild variant="link" className="p-0 h-auto font-bold text-brand-accent-secondary">
            <Link href={`/blog/${post.slug}`}>Read More →</Link>
            </Button>
            </div>
            </CardContent>
            </Card>
        ))}
        </div>

        <div className="text-center mt-12">
        <Button asChild size="lg" variant="outline">
        <Link href="/blog">View All Posts</Link>
        </Button>
        </div>
        </div>
        </section>
    );
}
