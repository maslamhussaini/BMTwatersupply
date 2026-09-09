import type { MetadataRoute } from "next";
import { business, navigation } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return navigation.map(page => ({ url: `${business.url}${page.href === "/" ? "/" : page.href}` }));
}
