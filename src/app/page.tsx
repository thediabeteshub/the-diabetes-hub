import { getSortedContentData } from "@/lib/content-parser";
import { HeroSection } from "@/components/homepage/hero-section";
import { FeaturedBlog } from "@/components/homepage/featured-blog";
import { LowGiSpotlight } from "@/components/homepage/low-gi-spotlight";
import { ToolsSection } from "@/components/homepage/tools-section";
import { FeaturedRecipes } from "@/components/homepage/featured-recipes"; // <-- IMPORT THE NEW COMPONENT
import { FreeDownload } from "@/components/homepage/free-download";
import { Newsletter } from "@/components/homepage/newsletter";

export default function Home() {
  const latestPosts = getSortedContentData('blog').slice(0, 3);

  return (
    <>
    <HeroSection />
    <FeaturedBlog />
    <LowGiSpotlight />
    <ToolsSection />
    <FeaturedRecipes /> {/* <-- ADD THE NEW COMPONENT HERE */}
    <FreeDownload />
    <Newsletter />
    </>
  );
}
