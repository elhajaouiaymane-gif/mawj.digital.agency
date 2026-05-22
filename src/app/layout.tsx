import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Mawj Digital Agency | Création de sites web premium au Maroc",
  description:
    "Agence web à Casablanca. On conçoit des sites web premium pour les entreprises marocaines : landing pages, sites vitrines, e-commerce. Devis gratuit en 48h.",
  keywords: [
    "agence web maroc", "création site web casablanca", "site web maroc",
    "développement web maroc", "landing page maroc", "e-commerce maroc",
    "agence digitale casablanca", "création site internet maroc",
  ],
  authors: [{ name: "Mawj Digital Agency" }],
  openGraph: {
    title: "Mawj Digital Agency | Sites web premium au Maroc",
    description:
      "Agence web à Casablanca. Landing pages, sites vitrines et e-commerce pour les entreprises marocaines. Devis gratuit en 48h.",
    type: "website",
    locale: "fr_FR",
    siteName: "Mawj Digital Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mawj Digital Agency | Sites web premium au Maroc",
    description:
      "Agence web à Casablanca. Landing pages, sites vitrines et e-commerce pour les entreprises marocaines.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-neutral-950 text-white antialiased overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  );
}