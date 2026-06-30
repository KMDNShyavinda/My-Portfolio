import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Kim — Software Engineer",
  description:
    "CS undergraduate at the University of Auckland. Full-stack developer specialising in React, TypeScript, and systems programming. Open to summer 2025 internships.",
  keywords: ["software engineer", "computer science", "internship", "React", "TypeScript", "Next.js"],
  authors: [{ name: "Alex Kim" }],
  openGraph: {
    title: "Alex Kim — Software Engineer",
    description: "CS undergraduate building clean, fast software. Open to summer 2025 internships.",
    url: "https://alexkim.dev",
    siteName: "Alex Kim",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Kim — Software Engineer",
    description: "CS undergraduate building clean, fast software.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-page text-primary`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-ink focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
