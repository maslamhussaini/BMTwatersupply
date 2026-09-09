import type { Metadata } from "next";

export const business = {
  name: "Basma Al Madina Transport LLC",
  shortName: "Basma Al Madina",
  url: "https://basmaalmadinatransport.co",
  phone: "+971 55 331 1977",
  phoneHref: "tel:+971553311977",
  secondaryPhone: "+971 50 464 3456",
  secondaryPhoneHref: "tel:+971504643456",
  whatsapp: "https://wa.me/971553311977",
  email: "Fk7550358@gmail.com",
  address: "Office 402, Crystal Tower, M Hotel by Millennium, Business Bay, Dubai, UAE",
  logo: "/bmt-logo.svg",
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  { id: "swimming-pool", title: "Swimming Pool Water Supply", short: "For your pool.", category: "Pool filling & top-ups", description: "Clean, balanced water delivery for new pool fills and top-ups. Reliable supply to keep your pool ready for use.", uses: "New pool fills · Pool top-ups · Residential & commercial pools", icon: "pool" },
  { id: "potable-water", title: "Sweet / Potable Water Supply", short: "For everyday life.", category: "Sweet / potable water", description: "High-quality drinking water delivered to your door. Suitable for residential, villa and commercial daily use.", uses: "Villas · Households · Commercial daily use", icon: "water" },
  { id: "non-potable-water", title: "Salt / Non-Potable Water Supply", short: "For the work ahead.", category: "Salt / non-potable water", description: "Non-potable water for construction, cleaning and dust suppression. Cost-effective supply for site operations.", uses: "Construction · Cleaning · Dust suppression", icon: "site" },
  { id: "water-removal", title: "Water Removal / Tank Emptying", short: "A fresh start.", category: "Removal & emptying", description: "Efficient tank emptying and water removal for pools, overhead tanks, underground tanks and construction sites.", uses: "Pools · Overhead & underground tanks · Construction sites", icon: "removal" },
  { id: "construction", title: "Construction Site Water Supply", short: "Keep your site moving.", category: "Construction supply", description: "Scheduled or on-call water delivery for construction projects. Potable and non-potable options available.", uses: "Construction projects · Scheduled supply · On-call delivery", icon: "construction" },
  { id: "bulk-delivery", title: "Commercial / Bulk Water Delivery", short: "For larger requirements.", category: "Commercial & bulk", description: "Bulk water delivery for hotels, compounds, commercial properties and large-scale requirements. Flexible scheduling.", uses: "Hotels · Compounds · Commercial properties", icon: "bulk" },
] as const;

export const faqs = [
  { question: "What type of water supply do you provide?", answer: "BMT provides potable (sweet) water, non-potable (salt) water, swimming pool water, and water removal services across Dubai and the UAE." },
  { question: "Do you provide swimming pool water?", answer: "Yes. We deliver clean, balanced swimming pool water for filling new pools or topping up existing ones." },
  { question: "Do you provide potable / sweet water?", answer: "Yes. We supply potable drinking-quality water for residential, commercial and villa requirements, including drinking, cooking and household uses." },
  { question: "Do you provide non-potable / salt water?", answer: "Yes. We supply non-potable water for construction sites, dust suppression, cleaning and other industrial or site-specific uses where potable water is not required." },
  { question: "Do you provide water removal / tank emptying?", answer: "Yes. We offer water removal and tank emptying for swimming pools, overhead tanks, underground tanks and construction sites." },
  { question: "Can you supply construction sites?", answer: "Yes. We supply both potable and non-potable water to construction sites. Bulk deliveries can be arranged on a scheduled or on-call basis depending on your project requirements." },
  { question: "How can I request a delivery?", answer: "Call BMT directly, or complete the service request form. Choose WhatsApp or email to open a draft in your app, then review it and press Send. Opening a draft does not send your request." },
  { question: "How can I contact BMT?", answer: `Call ${business.phone} or ${business.secondaryPhone}, or email ${business.email}. Our office is at ${business.address}.` },
];

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = `${title} | BMT Water Supply`;
  return {
    title, description,
    alternates: { canonical: path },
    openGraph: { title: fullTitle, description, url: path, siteName: business.name, locale: "en_AE", type: "website", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Basma Al Madina Transport LLC — Water Supply & Tanker Delivery" }] },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: ["/opengraph-image"] },
  };
}
