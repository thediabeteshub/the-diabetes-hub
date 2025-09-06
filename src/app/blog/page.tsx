import Link from "next/link";
import { getSortedContentData } from "@/lib/content-parser";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from 'date-fns';

export default function BlogPage() {
    const allPosts = getSortedContentData("blog");

    return (
        <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
        <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-heading">The Blog</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-text-secondary">
        Your source for recipes, tips, and insights on diabetes-friendly living.
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group block">
            <Card className="overflow-hidden h-full shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
            <CardHeader className="p-0">
            <div className="relative h-56 w-full">
            {/* Placeholder for Image */}
            <div className="bg-gray-200 h-full w-full group-hover:scale-105 transition-transform duration-300"></div>
            </div>
            </CardHeader>
            <CardContent className="p-6">
            <p className="text-sm text-brand-text-secondary mb-2">
            {format(new Date(post.date), 'MMMM d, yyyy')}
            </p>
            <CardTitle className="text-xl font-bold group-hover:text-brand-accent-primary transition-colors">
            {post.title}
            </CardTitle>
            <p className="mt-2 text-brand-text-secondary line-clamp-2">
            {post.description}
            </p>
            </CardContent>
            </Card>
            </Link>
        ))}
        </div>
        </div>
    );
}
