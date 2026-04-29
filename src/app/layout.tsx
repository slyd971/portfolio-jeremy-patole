import "./globals.css";
import type { Metadata } from "next";
import { portfolioConfig } from "@/data/config";

const siteUrl = portfolioConfig.seo.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: portfolioConfig.seo.title,
  description: portfolioConfig.seo.description,
  keywords: portfolioConfig.seo.keywords,
  alternates: {
    canonical: "/",
  },
  authors: [{ name: portfolioConfig.identity.fullName }],
  creator: portfolioConfig.identity.fullName,
  publisher: portfolioConfig.identity.fullName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: portfolioConfig.seo.title,
    description: portfolioConfig.seo.description,
    url: siteUrl,
    siteName: portfolioConfig.identity.fullName,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${portfolioConfig.identity.fullName} - Data Analyst & Ingénierie aéronautique`,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioConfig.seo.title,
    description: portfolioConfig.seo.description,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={portfolioConfig.seo.lang}
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
