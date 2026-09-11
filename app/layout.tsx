import type { Metadata } from "next";
import { Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./lib/LanguageProvider";

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Navod PM | Enterprise AI & Full-Stack Engineer",
  description:
    "Senior Software Engineer with 10+ years in enterprise software, now focused on Enterprise AI, RAG, Agentic AI and intelligent workflow systems.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${notoSansArabic.variable} min-h-screen font-sans text-slate-100 antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
