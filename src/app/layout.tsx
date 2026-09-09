import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
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
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
