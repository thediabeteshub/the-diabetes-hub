import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// Get the directory path for the content
const contentDirectory = path.join(process.cwd(), '_content')

export function getSortedContentData(contentType: 'blog' | 'recipes') {
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
            ...(matterResult.data as { title: string; date: string; [key: string]: any }),
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

export function getAllContentSlugs(contentType: 'blog' | 'recipes') {
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

export async function getContentData(contentType: 'blog' | 'recipes', slug: string) {
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
        ...(matterResult.data as { title: string; date: string; [key: string]: any }),
    }
}
