import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { RouteLink } from "@/components/navigation";
import { Icon } from "@/components/icons";
import { ContactCTA } from "@/components/page-parts";
import { business, services, pageMetadata } from "@/lib/site";

export function generateStaticParams() {
  return services.map(service => ({ id: service.id }));
}

export const dynamicParams = false;

const titleOverrides: Record<string, string> = {
  "tse-water": "TSE Water Supply | Sustainable Water Solutions",
};

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const service = services.find(s => s.id === id);
  if (!service) return {};
  const title = titleOverrides[service.id] ?? service.title;
  return pageMetadata(title, service.description, `/services/${service.id}`);
}

export default async function ServiceDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = services.find(s => s.id === id);
  if (!service) notFound();

  const structured = { "@context": "https://schema.org", "@type": "Service", name: service.title, description: service.description, url: `${business.url}/services/${service.id}`, provider: { "@id": `${business.url}/#business` } };
  const whatsappHref = `${business.whatsapp}?text=${encodeURIComponent(`Hi BMT, I'd like to request: ${service.title}`)}`;

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured).replace(/</g, "\\u003c") }} />
    <section className="section service-detail"><div className="container service-detail-grid">
      <div className="service-detail-media"><Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 800px) 100vw, 480px" style={{ objectFit: "cover" }} priority /></div>
      <div className="service-detail-copy">
        <RouteLink className="text-link back-link" href="/services">← All services</RouteLink>
        <span className="eyebrow">{service.category}</span>
        <h1>{service.title}</h1>
        <p>{service.description}</p>
        <p className="service-uses">{service.uses}</p>
        <div className="hero-actions">
          <RouteLink className="button button-aqua" href={`/contact?service=${encodeURIComponent(service.id)}`}>{service.cta}<Icon name="arrow" /></RouteLink>
          <a className="button button-whatsapp" href={whatsappHref} target="_blank" rel="noopener noreferrer"><Icon name="chat" />WhatsApp BMT</a>
        </div>
      </div>
    </div></section>
    <ContactCTA />
  </>;
}
