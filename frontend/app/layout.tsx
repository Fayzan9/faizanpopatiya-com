import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/providers/QueryProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Preloader } from "@/components/animations/preloader";
import { siteConfig } from "@/lib/config";
import { generateThemeCSS } from "@/lib/theme-utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.description,
  keywords: ["portfolio", "AI/ML", "GenAI", "LLMs", "Machine Learning", "Next.js"],
  authors: [{ name: siteConfig.personal.name }],
  openGraph: {
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    type: "website",
    url: siteConfig.metadata.siteUrl,
    images: [siteConfig.metadata.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate theme CSS based on selected palette
  const themeCSS = generateThemeCSS(siteConfig.theme.colorPalette);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: themeCSS }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <QueryProvider>
            <Preloader />
            <Navbar />
            <main className="min-h-screen relative z-10">
              {children}
            </main>
            <Footer />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
