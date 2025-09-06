
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// Get the directory path for the content
const contentDirectory = path.join(process.cwd(), '_content')

// Define a type for your frontmatter
interface FrontmatterData {
    title: string;
    date: string;
    description?: string;
    prepTime?: string;
    cookTime?: string;
    servings?: string;
    difficulty?: string;
    author?: string;
    image?: string;
    [key: string]: string | undefined;
}

// Update to include 'expert-advice' as a valid content type
export function getSortedContentData(contentType: 'blog' | 'recipes' | 'expert-advice') {
    const dirPath = path.join(contentDirectory, contentType)

    // Check if the directory exists
    if (!fs.existsSync(dirPath)) {
        console.warn(`Directory not found: ${dirPath}`);
        return [];
    }

    const fileNames = fs.readdirSync(dirPath)

    const allContentData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get slug
        const slug = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(dirPath, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the slug
        return {
            slug,
            ...(matterResult.data as FrontmatterData),
        }
    })

    // Sort posts by date
    return allContentData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

// Update to include 'expert-advice' as a valid content type
export function getAllContentSlugs(contentType: 'blog' | 'recipes' | 'expert-advice') {
    const dirPath = path.join(contentDirectory, contentType)

    // Check if the directory exists
    if (!fs.existsSync(dirPath)) {
        return [];
    }

    const fileNames = fs.readdirSync(dirPath)

    return fileNames.map((fileName) => {
        return {
            params: {
                slug: fileName.replace(/\.md$/, ''),
            },
        }
    })
}

// Update to include 'expert-advice' as a valid content type
export async function getContentData(contentType: 'blog' | 'recipes' | 'expert-advice', slug: string) {
    const fullPath = path.join(contentDirectory, contentType, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // Combine the data with the slug and contentHtml
    return {
        slug,
        contentHtml,
        ...(matterResult.data as FrontmatterData),
    }
}
