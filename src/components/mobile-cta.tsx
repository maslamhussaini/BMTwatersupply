"use client";

import { usePathname } from "next/navigation";
import { business } from "@/lib/site";
import { Icon } from "./icons";

export function MobileCta() {
  const pathname = usePathname();
  const onServiceDetail = pathname.startsWith("/services/") && pathname !== "/services";
  if (onServiceDetail) return null;
  return <div className="mobile-cta" aria-label="Quick contact"><a href={business.phoneHref}><Icon name="phone" />Call BMT</a><a href={business.whatsapp} target="_blank" rel="noopener noreferrer"><Icon name="chat" />WhatsApp</a></div>;
}
