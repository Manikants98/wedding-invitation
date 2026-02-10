import type { Metadata } from "next";
import { Playfair_Display, Great_Vibes } from "next/font/google";
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

export const metadata: Metadata = {
  title: weddingData.meta.title,
  description: weddingData.meta.description,
  openGraph: {
    title: weddingData.meta.title,
    description: weddingData.meta.description,
    url: weddingData.meta.url,
    siteName: "Manasi & Nirbhay Wedding",
    images: [
      {
        url: weddingData.meta.ogImage,
        width: 1200,
        height: 630,
        alt: "Wedding Invitation - Manasi & Nirbhay",
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
        className={`${playfair.variable} ${greatVibes.variable} antialiased bg-cream text-maroon overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
