"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DownloadItem {
    title: string;
    description: string;
    file: string;
    mockupText: string;
    slug: string;
}

export default function FreeDownloadLibraryPage() {
    const [visibleCount, setVisibleCount] = useState(6);
    const allDownloads: DownloadItem[] = [
        {
            slug: "low-gi-food-list",
            title: "Low-GI Food List",
            description: "An essential, printable guide to diabetes-friendly South Asian ingredients.",
            file: "/downloads/low-gi-food-list.pdf",
            mockupText: "PDF",
        },
        {
            slug: "7-day-meal-plan",
            title: "7-Day Meal Plan",
            description: "A sample one-week meal plan to kickstart your healthy eating journey.",
            file: "#",
            mockupText: "PLAN",
        },
        {
            slug: "healthy-snack-ideas",
            title: "Healthy Snack Ideas",
            description: "A list of 20+ delicious and easy snacks to manage blood sugar.",
            file: "#",
            mockupText: "GUIDE",
        },
        { slug: "item-4", title: "Grocery Shopping Checklist", description: "Never forget a healthy item at the store again.", file: "#", mockupText: "LIST" },
        { slug: "item-5", title: "Guide to Healthy Fats", description: "Understand the best fats for a diabetes-friendly diet.", file: "#", mockupText: "GUIDE" },
        { slug: "item-6", title: "Portion Control Guide", description: "A visual guide to managing your portion sizes effectively.", file: "#", mockupText: "PDF" },
        { slug: "item-7", title: "Reading Food Labels", description: "Learn to decode nutrition labels like a pro.", file: "#", mockupText: "GUIDE" },
    ];

    return (
        <div className="bg-brand-background-alt">
        <div className="container mx-auto px-4 md:px-6 py-24 md:py-32">
        <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-heading">
        Your Hub for Free Resources
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-brand-text-secondary">
        Explore our library of free guides, checklists, and meal plans designed to help you thrive. Download as many as you like!
        </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allDownloads.slice(0, visibleCount).map((item) => (
            <Card key={item.slug} className="bg-white border-gray-200 flex flex-col">
            <CardHeader className="flex-row items-center gap-4">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-gray-500 font-bold">{item.mockupText}</span>
            </div>
            <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
            <p className="text-brand-text-secondary flex-grow">{item.description}</p>
            <div className="mt-6">
            <Button asChild className="w-full bg-brand-cta-primary hover:bg-brand-cta-hover text-white">
            <Link href={item.file} target="_blank">Download Now</Link>
            </Button>
            </div>
            </CardContent>
            </Card>
        ))}
        </div>

        {visibleCount < allDownloads.length && (
            <div className="text-center mt-16">
            <Button
            size="lg"
            variant="outline"
            onClick={() => setVisibleCount(prevCount => prevCount + 6)}
            >
            View More Resources
            </Button>
            </div>
        )}
        </div>
        </div>
    );
}
