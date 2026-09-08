import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Basma Al Madina Transport LLC | Water Tanker Supply Dubai",
  description:
    "Professional water tanker and water supply services in Dubai, UAE. Reliable potable, non-potable, swimming pool water delivery and tanker services for residential, commercial and construction needs.",
  keywords: [
    "water tanker Dubai",
    "water supply Dubai",
    "potable water delivery",
    "swimming pool water",
    "construction water supply",
    "BMT Dubai",
    "Basma Al Madina Transport",
    "water tanker UAE",
    "non-potable water",
    "bulk water delivery",
  ],
  authors: [{ name: "Basma Al Madina Transport LLC" }],
  openGraph: {
    title: "Basma Al Madina Transport LLC | Water Tanker Supply Dubai",
    description:
      "Professional water tanker and water supply services in Dubai, UAE. Reliable potable, non-potable, swimming pool water delivery and tanker services.",
    url: "https://bmtwatersupply.ae",
    siteName: "BMT Water Supply",
    locale: "en_AE",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
