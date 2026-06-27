import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getSiteUrl } from "@/lib/site-url";
import { macedConfig } from "@/lib/maced";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${macedConfig.name} | Infoprodutos Digitais`,
  description: macedConfig.heroSubheadline,
  openGraph: {
    title: macedConfig.name,
    description: macedConfig.heroSubheadline,
    type: "website",
    url: siteUrl,
    siteName: macedConfig.name,
    locale: "pt_BR",
    images: [
      {
        url: "/macedo-logo-agencia.png",
        width: 494,
        height: 453,
        alt: macedConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: macedConfig.name,
    description: macedConfig.heroSubheadline,
    images: ["/macedo-logo-agencia.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
