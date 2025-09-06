"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SearchDialog } from "@/components/shared/search-dialog"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet"

// --- CHANGE 1: REMOVED "Expert-Advice" from this list ---
const navLinks = [
    { href: "/", label: "Home" },
{ href: "/blog", label: "Blog" },
{ href: "/low-gi-guide", label: "Low-GI-Guide" },
{ href: "/tools", label: "Tools" },
{ href: "/recipes", label: "Recipes" },
{ href: "/free-download", label: "Free-download" },
]

export function SiteHeader() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
        <header
        className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
            scrolled ? "bg-white/80 shadow-md backdrop-blur-md border-b border-gray-200" : "bg-transparent"
        )}
        >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-brand-text-primary group">
        TheDiabetesHub
        <span className="block h-0.5 max-w-0 bg-brand-accent-primary transition-all duration-500 group-hover:max-w-full"></span>
        </span>
        </Link>

        {/* --- CHANGE 2: INCREASED SPACING in `space-x-8` --- */}
        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
        {navLinks.map((link) => (
            <Link
            key={link.href}
            href={link.href}
            className={cn(
                "relative text-lg font-medium transition-colors hover:text-brand-accent-secondary",
                pathname === link.href ? "text-brand-accent-primary" : "text-brand-text-secondary"
            )}
            >
            {link.label}
            <span className={cn(
                "absolute bottom-[-4px] left-0 h-0.5 w-full scale-x-0 bg-brand-accent-primary transition-transform duration-300 ease-out",
                pathname === link.href ? "scale-x-100" : "group-hover:scale-x-100"
            )}></span>
            </Link>
        ))}
        <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)}>
        <SearchIcon className="h-5 w-5" />
        <span className="sr-only">Search</span>
        </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
        <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)}>
        <SearchIcon className="h-5 w-5" />
        <span className="sr-only">Search</span>
        </Button>
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
        <MenuIcon className="h-6 w-6" />
        <span className="sr-only">Toggle Menu</span>
        </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full max-w-xs bg-white/80 backdrop-blur-md">
        <SheetHeader className="text-left">
        <SheetTitle className="sr-only">Main Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-6 pt-8">
        {navLinks.map((link) => (
            <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className={cn(
                "text-2xl font-semibold text-center py-2 transition-colors hover:text-brand-accent-secondary",
                pathname === link.href ? "text-brand-accent-primary" : "text-brand-text-primary"
            )}
            >
            {link.label}
            </Link>
        ))}
        </div>
        </SheetContent>
        </Sheet>
        </div>
        </div>
        </header>
        <SearchDialog isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
        </>
    )
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
        <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /> <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
        <circle cx="11" cy="11" r="8" /> <path d="m21 21-4.3-4.3" />
        </svg>
    )
}
