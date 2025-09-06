import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const advicePosts = [
    {
        slug: "#",
        title: "A Dietitian's Guide to Navigating Festive Feasts",
        author: "Dr. Priya Sharma, RD",
        description: "Learn practical strategies to enjoy festivals without derailing your blood sugar management.",
    },
{
    slug: "#",
    title: "The Role of Strength Training in Improving Insulin Sensitivity",
    author: "Arjun Verma, CPT",
    description: "Discover why building muscle is one of the most effective ways to control diabetes.",
},
{
    slug: "#",
    title: "Decoding Food Labels: What to Look for and What to Avoid",
    author: "Dr. Priya Sharma, RD",
    description: "Become a savvy shopper with this guide to understanding nutrition labels for diabetes.",
},
];

export default function ExpertAdvicePage() {
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
        {advicePosts.map((post) => (
            <Link href={`/expert-advice/${post.slug}`} key={post.title} className="group block">
            <Card className="h-full shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col">
            <CardHeader>
            <CardTitle className="text-xl font-bold group-hover:text-brand-accent-primary transition-colors">
            {post.title}
            </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
            <p className="text-brand-text-secondary flex-grow">{post.description}</p>
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
