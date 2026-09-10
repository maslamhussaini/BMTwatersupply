import type { MetadataRoute } from "next";
import { business, navigation, services } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = navigation.map(page => ({ url: `${business.url}${page.href === "/" ? "/" : page.href}` }));
  const serviceDetails = services.map(service => ({ url: `${business.url}/services/${service.id}` }));
  return [...pages, ...serviceDetails];
}
