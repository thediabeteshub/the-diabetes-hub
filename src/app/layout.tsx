import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { AosProvider } from "@/components/shared/aos-provider"; // Import AOS Provider

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "The Diabetes Hub",
  description: "Your trusted hub for low-gi living and smarter choices for diabetes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable} scroll-smooth`}>
    <body className="bg-brand-background text-brand-text-primary font-sans antialiased">
    <AosProvider> {/* Add AOS Provider here */}
    <SiteHeader />
    <main>{children}</main>
    <SiteFooter />
    </AosProvider>
    </body>
    </html>
  );
}
