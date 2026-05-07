import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name + " — " + siteConfig.role,
    template: "%s | " + siteConfig.name,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    title: siteConfig.name + " — " + siteConfig.role,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 pt-16">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
