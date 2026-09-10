import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Header, NavigationProvider } from "@/components/navigation";
import { Footer } from "@/components/page-parts";
import { business } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], style: ["normal", "italic"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: { default: "Basma Al Madina Transport LLC | Water Tanker Supply Dubai", template: "%s | BMT Water Supply" },
  description: "Professional water supply and tanker delivery in Dubai and the UAE.",
  icons: { icon: [{ url: "/favicon.ico" }, { url: "/favicon-32.png", sizes: "32x32", type: "image/png" }], apple: [{ url: "/favicon-180.png", sizes: "180x180" }] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structured = { "@context": "https://schema.org", "@type": "LocalBusiness", "@id": `${business.url}/#business`, name: business.name, url: business.url, logo: `${business.url}${business.logo}`, telephone: "+971553311977", email: business.email, address: { "@type": "PostalAddress", streetAddress: "Office 402, Crystal Tower, M Hotel by Millennium, Business Bay", addressLocality: "Dubai", addressCountry: "AE" }, areaServed: "United Arab Emirates", contactPoint: [{ "@type": "ContactPoint", telephone: "+971504643456", contactType: "customer service" }] };
  return <html lang="en"><body className={montserrat.variable}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured).replace(/</g, "\\u003c") }} /><NavigationProvider><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content" tabIndex={-1}>{children}</main><Footer /></NavigationProvider></body></html>;
}
