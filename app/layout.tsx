import type { Metadata } from "next";
import { Playfair_Display, Great_Vibes, Dancing_Script, Pacifico, Noto_Sans_Devanagari, Kalam } from "next/font/google";
import "./globals.css";
import { weddingData } from "@/lib/wedding-data";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

const dancingScript = Dancing_Script({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["devanagari"],
  variable: "--font-noto-sans-devanagari",
  display: "swap",
});

const kalam = Kalam({
  weight: ["300", "400", "700"],
  subsets: ["latin", "devanagari"],
  variable: "--font-kalam",
  display: "swap",
});

export const metadata: Metadata = {
  title: weddingData.meta.title,
  description: weddingData.meta.description,
  openGraph: {
    title: weddingData.meta.title,
    description: weddingData.meta.description,
    url: weddingData.meta.url,
    siteName: "Toshit & Kajal Wedding",
    images: [
      {
        url: weddingData.meta.ogImage,
        width: 1200,
        height: 630,
        alt: "Wedding Invitation - Toshit & Kajal",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${greatVibes.variable} ${dancingScript.variable} ${pacifico.variable} ${notoSansDevanagari.variable} ${kalam.variable} antialiased bg-cream text-maroon overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
