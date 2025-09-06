import { getSortedContentData } from "@/lib/content-parser";
import { HeroSection } from "@/components/homepage/hero-section";
import { FeaturedBlog } from "@/components/homepage/featured-blog";
import { LowGiSpotlight } from "@/components/homepage/low-gi-spotlight";
import { ToolsSection } from "@/components/homepage/tools-section";
import { FeaturedRecipes } from "@/components/homepage/featured-recipes";
import { FreeDownload } from "@/components/homepage/free-download";
import { Newsletter } from "@/components/homepage/newsletter";

export default function Home() {
  const latestPosts = getSortedContentData('blog').slice(0, 3);
  const latestRecipes = getSortedContentData('recipes').slice(0, 3); // Assuming you want 3 latest recipes

  return (
    <>
    <HeroSection />
    <FeaturedBlog posts={latestPosts} />
    <LowGiSpotlight />
    <ToolsSection />
    <FeaturedRecipes posts={latestRecipes} />
    <FreeDownload />
    <Newsletter />
    </>
  );
}
