import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Get the directory path for the content
const contentDirectory = path.join(process.cwd(), 'content')

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
    tags?: string[];
    [key: string]: unknown;
}

export function getSortedContentData(contentType: 'blog' | 'recipes' | 'expert-advice') {
    const dirPath = path.join(contentDirectory, contentType)

    if (!fs.existsSync(dirPath)) {
        console.warn(`Directory not found: ${dirPath}`);
        return [];
    }

    const fileNames = fs.readdirSync(dirPath).filter(file => file.endsWith('.mdx'));

    const allContentData = fileNames.map((fileName) => {
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

export function getAllContentSlugs(contentType: 'blog' | 'recipes' | 'expert-advice') {
    const dirPath = path.join(contentDirectory, contentType)

    if (!fs.existsSync(dirPath)) {
        return [];
    }

    const fileNames = fs.readdirSync(dirPath).filter(file => file.endsWith('.mdx'));

    // FIXED: Return the correct format for App Router's generateStaticParams
    return fileNames.map((fileName) => {
        return {
            slug: fileName.replace(/\.mdx$/, ''),
        }
    })
}

export function getContentData(contentType: 'blog' | 'recipes' | 'expert-advice', slug: string) {
    const fullPath = path.join(contentDirectory, contentType, `${slug}.mdx`)

    // Check if file exists before trying to read it
    if (!fs.existsSync(fullPath)) {
        throw new Error(`File not found: ${fullPath}`)
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { content, data } = matter(fileContents)

    return {
        slug,
        content,
        frontmatter: data as FrontmatterData,
    }
}
