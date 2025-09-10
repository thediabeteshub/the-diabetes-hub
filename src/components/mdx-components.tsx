"use client";

import Image, { type StaticImageData } from "next/image";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface ImageProps {
    src: string | StaticImageData;
    alt?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    [key: string]: unknown;
}

// NextImage wrapper for MDX <Image />
function MDXImage(props: ImageProps) {
    const { src, alt, width, height, className, ...rest } = props;

    return (
        <Image
        src={src}
        alt={alt || ""}
        width={Number(width) || 800}
        height={Number(height) || 600}
        className={`rounded-lg ${className || ""}`}
        {...rest}
        />
    );
}

// Simple img component replaced with Next.js Image
function SimpleImg(props: ImageProps) {
    const { src, alt, width, height, className, ...rest } = props;

    return (
        <Image
        src={src}
        alt={alt || ""}
        width={Number(width) || 800}
        height={Number(height) || 600}
        className={`rounded-lg ${className || ""}`}
        {...rest}
        />
    );
}

export const mdxComponents = {
    Image: MDXImage,
    img: SimpleImg,  // Now uses Next.js Image instead of native img
    table: Table,
    tbody: TableBody,
    thead: TableHeader,
    tr: TableRow,
    th: TableHead,
    td: TableCell,
};
