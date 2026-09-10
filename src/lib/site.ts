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
  logo: "/bmt-logo.png",
} as const;

export const heroImage = { src: "/hero-bmt-tanker-dubai.jpg", alt: "BMT water tanker filling at a storage facility with the Dubai skyline behind it" } as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  { id: "swimming-pool", title: "Swimming Pool Water Supply", short: "For your pool.", category: "Pool filling & top-ups", description: "Clean, balanced water delivery for new pool fills and top-ups. Reliable supply to keep your pool ready for use.", uses: "New pool fills · Pool top-ups · Residential & commercial pools", icon: "pool", cta: "Request this service", image: "/service-swimming-pool.png", imageAlt: "Swimming pool water supply service" },
  { id: "potable-water", title: "Sweet / Potable Water Supply", short: "For everyday life.", category: "Sweet / potable water", description: "High-quality drinking water delivered to your door. Suitable for residential, villa and commercial daily use.", uses: "Villas · Households · Commercial daily use", icon: "water", cta: "Request this service", image: "/service-potable-water.png", imageAlt: "Potable water supply" },
  { id: "tse-water", title: "TSE Water Supply", short: "For sustainable irrigation.", category: "Sustainable Water Solutions", description: "We supply TSE (Treated Sewage Effluent) water for irrigation systems, providing a practical and sustainable water solution while supporting responsible wastewater reuse and reducing environmental impact.", uses: "Irrigation systems · Sustainable reuse · Responsible water management", icon: "irrigation", cta: "Request TSE Water", image: "/service-tse-water.png", imageAlt: "TSE water supply for irrigation" },
  { id: "rain-water-removal", title: "Rain Water Removal Services in Dubai", short: "Restoring safe ground.", category: "Rain water removal", description: "Heavy rainfall can quickly cause water accumulation around residential, commercial and industrial properties. BMT provides responsive rain water removal services in Dubai to extract accumulated water, remove it from affected areas and help restore safe, usable conditions.", uses: "Residential areas · Commercial areas · Industrial areas", icon: "rain", cta: "Request Rain Water Removal", image: "/service-rain-water-removal.png", imageAlt: "Rain water removal service in Dubai" },
  { id: "construction", title: "Construction Site Water Supply", short: "Keep your site moving.", category: "Construction supply", description: "Scheduled or on-call water delivery for construction projects. Potable and non-potable options available.", uses: "Construction projects · Scheduled supply · On-call delivery", icon: "construction", cta: "Request this service", image: "/service-construction-site.png", imageAlt: "Water tanker at a construction site" },
  { id: "bulk-delivery", title: "Commercial / Bulk Water Delivery", short: "For larger requirements.", category: "Commercial & bulk", description: "Bulk water delivery for hotels, compounds, commercial properties and large-scale requirements. Flexible scheduling.", uses: "Hotels · Compounds · Commercial properties", icon: "bulk", cta: "Request this service", image: "/service-commercial-bulk.png", imageAlt: "Commercial bulk water delivery storage tanks" },
] as const;

export const faqs = [
  { question: "What type of water supply do you provide?", answer: "BMT provides potable (sweet) water, TSE (Treated Sewage Effluent) water for irrigation, swimming pool water, and rain water removal services across Dubai and the UAE." },
  { question: "Do you provide swimming pool water?", answer: "Yes. We deliver clean, balanced swimming pool water for filling new pools or topping up existing ones." },
  { question: "Do you provide potable / sweet water?", answer: "Yes. We supply potable drinking-quality water for residential, commercial and villa requirements, including drinking, cooking and household uses." },
  { question: "Do you provide TSE water for irrigation?", answer: "Yes. We supply TSE (Treated Sewage Effluent) water for irrigation systems, offering a practical and sustainable solution that supports responsible wastewater reuse and reduces environmental impact." },
  { question: "Do you provide rain water removal?", answer: "Yes. BMT provides responsive rain water removal services in Dubai, extracting water that has accumulated around residential, commercial and industrial properties and helping restore safe, usable conditions." },
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
