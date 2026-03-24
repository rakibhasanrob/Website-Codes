import type { Metadata, Viewport } from "next";
import { DM_Sans, Syne } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { site } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0e" },
    { media: "(prefers-color-scheme: light)", color: "#f7fafc" },
  ],
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - ${site.title}`,
    template: `%s - ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} - ${site.title}`,
    description: site.description,
    images: [
      { url: "/og-image.svg", width: 1200, height: 630, alt: `${site.name} portfolio` },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} - ${site.title}`,
    description: site.description,
    images: ["/og-image.svg"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable}`}>
      <body className="min-h-screen font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-surface"
        >
          Skip to content
        </a>
        <Header />
        <BackgroundEffects />
        <main id="main-content" className="pb-16 pt-10 sm:pt-14">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

