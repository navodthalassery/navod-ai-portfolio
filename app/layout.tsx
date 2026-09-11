import type { Metadata, Viewport } from "next";
import { Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./lib/LanguageProvider";

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

const siteUrl = "https://navodpm.com";
const title = "Navod PM | Enterprise AI & Full-Stack Engineer";
const description =
  "Senior Software Engineer with 10+ years in enterprise software, now focused on Enterprise AI, RAG, Agentic AI and intelligent workflow systems.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Navod PM", "Senior Software Engineer", "Enterprise AI", "Agentic AI", "RAG",
    "Full-Stack Developer", "UAE Software Engineer", "AI Integration", "Azure AI",
  ],
  authors: [{ name: "Navod PM", url: siteUrl }],
  creator: "Navod PM",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Navod PM",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#070b12",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Navod PM",
  jobTitle: "Senior Software Engineer",
  description,
  url: siteUrl,
  image: `${siteUrl}/navod-portrait.png`,
  sameAs: ["https://www.linkedin.com/in/navod-p-m-50451754/"],
  email: "mailto:navodthalassery@gmail.com",
  address: { "@type": "PostalAddress", addressCountry: "AE" },
  knowsAbout: [
    "Enterprise AI", "RAG", "Agentic AI", "Full-Stack Development", ".NET", "Angular", "React", "Azure AI",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${notoSansArabic.variable} min-h-screen font-sans text-slate-100 antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
