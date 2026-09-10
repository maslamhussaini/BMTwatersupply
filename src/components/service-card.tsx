import Image from "next/image";
import { RouteLink } from "./navigation";
import { Icon } from "./icons";
import type { services } from "@/lib/site";

type Service = (typeof services)[number];

export function ServiceCard({ service, compact = false }: { service: Service; compact?: boolean }) {
  return <RouteLink className="service-card" href={`/services/${service.id}`}>
    <span className="service-card-media">
      <Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" style={{ objectFit: "cover" }} />
    </span>
    <span className="service-card-body">
      <span className="eyebrow">{service.category}</span>
      <h3>{service.title}</h3>
      <p>{compact ? service.short : service.description}</p>
      <span className="text-link">View Details<Icon name="arrow" /></span>
    </span>
  </RouteLink>;
}
