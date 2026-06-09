import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wh-guide-australia.vercel.app"),
  title: {
    default: "WH Guide Australia",
    template: "%s | WH Guide Australia",
  },
  description:
    "オーストラリアワーホリ向けに、ビザ、渡航準備、現地生活、仕事探し、掲示板をまとめたガイドサイト。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://wh-guide-australia.vercel.app",
    title: "WH Guide Australia",
    description:
      "オーストラリアワーホリ向けに、ビザ、渡航準備、現地生活、仕事探し、掲示板をまとめたガイドサイト。",
    siteName: "WH Guide Australia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-sky-50/40 text-slate-900">
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
