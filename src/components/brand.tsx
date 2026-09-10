"use client";

import Image from "next/image";
import { business } from "@/lib/site";

export function Brand({ compact = false }: { compact?: boolean }) {
  return <span className={`brand ${compact ? "brand-compact" : ""}`}>
    <span className="brand-mark"><Image src={business.logo} alt="BMT" width={compact ? 41 : 60} height={compact ? 44 : 64} priority /></span>
    {!compact && <span className="brand-name">Basma Al Madina<span>TRANSPORT LLC · WATER SUPPLY</span></span>}
  </span>;
}
