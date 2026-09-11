import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Navod PM | Enterprise AI & Full-Stack Engineer",
  description:
    "Senior Software Engineer with 10+ years in enterprise software, now focused on Enterprise AI, RAG, Agentic AI and intelligent workflow systems.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans text-slate-100 antialiased">{children}</body>
    </html>
  );
}
