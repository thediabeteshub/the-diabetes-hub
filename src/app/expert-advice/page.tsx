import Link from "next/link";
import Image from "next/image"; // <-- 1. Import the Image component
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSortedContentData } from "@/lib/content-parser"; // <-- 2. Import the data fetching function

export default function ExpertAdvicePage() {
    // 3. Fetch real data instead of using the hardcoded array
    const allPosts = getSortedContentData("expert-advice");

    return (
        <div className="bg-brand-background-alt">
        <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
        <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-heading">
        Expert Advice
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-text-secondary">
        Science-backed insights from dietitians, fitness experts, and healthcare professionals.
        </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* 4. Map over the real data */}
        {allPosts.map((post) => (
            <Link href={`/expert-advice/${post.slug}`} key={post.slug} className="group block">
            {/* 5. MODIFIED the Card to be a single flex container */}
            <Card className="overflow-hidden h-full shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <CardHeader className="p-0">
            {/* 6. ADDED the Image block, same as blog/recipes */}
            <div className="relative h-56 w-full">
            {post.image ? (
                <Image
                src={post.image as string}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
            ) : (
                <div className="bg-gray-200 h-full w-full"></div>
            )}
            </div>
            </CardHeader>
            <CardContent className="p-6 flex-grow flex flex-col">
            <CardTitle className="text-xl font-bold group-hover:text-brand-accent-primary transition-colors">
            {post.title}
            </CardTitle>
            <p className="mt-2 text-brand-text-secondary flex-grow">{post.description}</p>
            <p className="mt-4 text-sm font-semibold text-brand-text-primary">
            By {post.author}
            </p>
            </CardContent>
            </Card>
            </Link>
        ))}
        </div>
        </div>
        </div>
    );
}
