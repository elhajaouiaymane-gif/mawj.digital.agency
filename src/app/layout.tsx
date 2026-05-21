import type { Metadata, Viewport } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
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

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Mawj Digital Agency | We craft digital waves that move the world.",
  description:
    "Award-winning editorial creative studio based in Casablanca, Paris & Dubai. We craft work that defines the now and shapes what is next.",
  keywords: [
    "Mawj", "digital agency", "creative studio", "Casablanca",
    "web design", "editorial design", "Morocco", "Paris", "Dubai",
  ],
  authors: [{ name: "Mawj Digital Agency" }],
  openGraph: {
    title: "Mawj Digital Agency",
    description: "We craft digital waves that move the world.",
    type: "website",
    locale: "en_US",
    siteName: "Mawj",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mawj Digital Agency",
    description: "We craft digital waves that move the world.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F5F1E8",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-cream text-charcoal antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
