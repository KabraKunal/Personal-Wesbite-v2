import React from "react"
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kunal Kabra | Builder & Strategy Consultant",
  description:
    "Writing about business, technology, India, and ideas. Building things that scale.",
  generator: "v0.app",
  openGraph: {
    title: "Kunal Kabra | Builder & Strategy Consultant",
    description:
      "Writing about business, technology, India, and ideas. Building things that scale.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kunal Kabra | Builder & Strategy Consultant",
    description:
      "Writing about business, technology, India, and ideas. Building things that scale.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1117" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="kunal-kabra-theme"
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
