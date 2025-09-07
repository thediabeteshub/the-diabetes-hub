import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize' // <-- 1. IMPORTED serialize

// Get the directory path for the content
const contentDirectory = path.join(process.cwd(), 'content')

// Define a type for your frontmatter (no changes needed here)
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
    tags?: string[];
    [key: string]: unknown;
}

// Update to include 'expert-advice' as a valid content type
export function getSortedContentData(contentType: 'blog' | 'recipes' | 'expert-advice') {
    const dirPath = path.join(contentDirectory, contentType)

    if (!fs.existsSync(dirPath)) {
        console.warn(`Directory not found: ${dirPath}`);
        return [];
    }

    // <-- 2. UPDATED to read .mdx files
    const fileNames = fs.readdirSync(dirPath).filter(file => file.endsWith('.mdx'));

    const allContentData = fileNames.map((fileName) => {
        // <-- 3. UPDATED to replace .mdx extension
        const slug = fileName.replace(/\.mdx$/, '')

        const fullPath = path.join(dirPath, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)

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

    if (!fs.existsSync(dirPath)) {
        return [];
    }

    // <-- 4. UPDATED to read .mdx files
    const fileNames = fs.readdirSync(dirPath).filter(file => file.endsWith('.mdx'));

    return fileNames.map((fileName) => {
        return {
            params: {
                slug: fileName.replace(/\.mdx$/, ''), // <-- 5. UPDATED to replace .mdx extension
            },
        }
    })
}

// Update to include 'expert-advice' as a valid content type
export async function getContentData(contentType: 'blog' | 'recipes' | 'expert-advice', slug: string) {
    // <-- 6. UPDATED to look for .mdx files
    const fullPath = path.join(contentDirectory, contentType, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    // <-- 7. REPLACED remark/html with MDX serialization
    const mdxSource = await serialize(matterResult.content)

    // <-- 8. UPDATED the return object structure
    return {
        slug,
        mdxSource,
        frontmatter: matterResult.data as FrontmatterData,
    }
}
